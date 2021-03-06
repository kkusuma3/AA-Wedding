import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { IconLinePurpleSrc, IconLineSrc } from "../../../shared/ImgSrc";
import { appendSpreadsheet } from '../../../shared/sheets';
import { Sheets } from '../../../shared/types/Sheets';
import { User } from "../../../shared/types/User";
import Container from "../../Container";
import WishesList from "../../WishesList";
import { WavePurpleSrc } from "../HealthProtocols";
import HealthProtocolsStyles from '../HealthProtocols/styles.module.css';
import { FormValues } from './types';

const formInitialValues = {
    name:'',
    wishes: '',
};

const sheetSubmissionRow = {
    Name: "",
    Wishes: ""
};

const FormInputClass = "bg-gray-200 w-full p-3 rounded-md";
const FormTextAreaClass = "bg-gray-200 h-32 md:h-40 p-5 resize-none rounded-md";

const Wishes = ({ isOnline }: User) => (
    <>
        <Formik
            initialValues={formInitialValues}
            onSubmit={(
                values: FormValues,
                { resetForm, setSubmitting }: FormikHelpers<FormValues>
            ) => {
                sheetSubmissionRow.Name = values.name;
                sheetSubmissionRow.Wishes = values.wishes;
                appendSpreadsheet(sheetSubmissionRow, Sheets.WISHES);
                resetForm({
                    values: formInitialValues
                })
                setSubmitting(false);
            }}
        >  
            {({ isSubmitting }) => (
                <Form className={isOnline ? HealthProtocolsStyles.background : "bg-white"}>
                    <Container>
                        <div className="flex flex-row flex-wrap justify-evenly space-x-4">
                            <div className="flex flex-col justify-evenly space-y-6 text-center w-full md:w-5/12">
                                <h4 className="text-2xl md:text-4xl font-bold">Your Wishes</h4>
                                <span className="text-md md:text-lg">Send your warmest wishes to the bride & groom</span>
                                <Field
                                    type="name"
                                    name="name"
                                    id="wishes-name"
                                    placeholder="Name"
                                    className={ isOnline ? "text-black " + FormInputClass : FormInputClass }
                                />
                                <Field
                                    component="textarea"
                                    rows="4"
                                    name="wishes"
                                    id="wishes-message"
                                    className={ isOnline ? "text-black " + FormTextAreaClass : FormTextAreaClass }
                                    placeholder="Write your message here"
                                />
                                <button
                                    disabled={isSubmitting}
                                    className={
                                        isOnline ?
                                        "m-2 rounded-3xl w-full mx-auto p-2 md:p-3 bg-white text-purple-main" 
                                        : "m-2 rounded-3xl w-full mx-auto p-2 md:p-3 text-white bg-purple-main"
                                    }
                                >
                                    Send
                                </button>
                            </div>
                            <img className="hidden md:block" src={isOnline ? IconLineSrc : IconLinePurpleSrc} alt="Vertical Line"/>
                            <div className="w-full md:w-5/12 my-auto pt-10 md:pt-0">
                                <WishesList isOnline={isOnline} />
                            </div>
                        </div>
                    </Container>
                </Form>
            )}
        </Formik>
        {isOnline && <img src={WavePurpleSrc} alt="Image of Purple Wave" className="w-full"/>}
    </>
);

export default Wishes;