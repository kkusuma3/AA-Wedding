import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { appendSpreadsheet } from '../../shared/sheets';
import { Sheets } from '../../shared/types/Sheets';
import { FormValues } from './types';
import { SignupSchema } from './validation.schema';

const formInitialValues = {
    name:'',
    email: '',
    phoneNumber:'',
    numberOfGuests: '',
    attendanceConfirmation: ''
};

const sheetSubmissionRow = {
    Name: "",
    Email: "",
    "Phone Number": "",
    "Number of Guests": 0,
    "Attendance Confirmation": ""
};

const RSVPForm = () => (
    <Formik
        initialValues={formInitialValues}
        validationSchema={SignupSchema}
        onSubmit={(
            values: FormValues,
            { resetForm, setSubmitting }: FormikHelpers<FormValues>
        ) => {
            sheetSubmissionRow.Name = values.name;
            sheetSubmissionRow.Email = values.email;
            sheetSubmissionRow['Phone Number'] = values.phoneNumber;
            sheetSubmissionRow['Number Of Guests'] = values.numberOfGuests;
            sheetSubmissionRow['Attendance Confirmation'] = values.attendanceConfirmation;
            appendSpreadsheet(sheetSubmissionRow, Sheets.RSVP);
            resetForm({
                values: formInitialValues
            })
            setSubmitting(false);
        }}
     >  
        {({ isSubmitting }) => (
            <Form className="flex flex-col justify-evenly md:w-2/3 mx-auto">
                <span className="text-white text-2xl md:text-4xl text-center">RSVP</span>
                <div className="flex flex-col justify-evenly pt-5 md:pt-10">
                    <div className="flex flex-row flex-wrap justify-between space-y-4 md:space-y-0 py-4">
                        <Field type="name" name="name" placeholder="Name*" className="p-3 md:p-5 w-full md:w-5/12 rounded-md"/>
                        <ErrorMessage name="name" component="div" />
                        <Field type="email" name="email" placeholder="Email" className="p-3 md:p-5 w-full md:w-5/12 rounded-md"/>
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between space-y-4 md:space-y-0 py-4">
                        <Field type="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="p-3 md:p-5 w-full md:w-5/12 rounded-md"/>
                        <Field component="select" name="numberOfGuests" className="p-3 md:p-5 w-full md:w-5/12 rounded-md">
                            <option value="" disabled selected>{`Number of Guest(s)*`}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </Field>
                    </div>
                    <div className="py-4">
                        <Field component="select" name="attendanceConfirmation" className="p-3 md:p-5 w-full rounded-md">
                            <option value="" disabled selected>Attendance Confirmation</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Field>
                    </div>
                </div>
                <span className="text-white text-md">{`*Required fields`}</span>
                <button
                    className="m-2 rounded-3xl w-1/3 mx-auto p-2 md:p-3 text-white bg-blue-700"
                    disabled={isSubmitting}    
                >
                    Submit
                </button>
            </Form>
        )}
    </Formik>
);

export default RSVPForm;