module.exports = {
    env: {
       SPREADSHEET_ID : '1qk1wZeSPh0Hg56PBS-kDqplLUPW2TeedEG9rWxTsb20',
       SHEET_ID : '0',
       CLIENT_EMAIL : 'googlesheets@aa-wedding-355602.iam.gserviceaccount.com',
       PRIVATE_KEY : '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGHTw9oa+O42Zh\nN64mNe+/ACm0dAETglmerHQKanUI821Y7l79hXSDTav/LGFhkCOIUQdl6zoA67Xk\nfF1R2iSY3Z/H3UtDnTVaC4Pkj1C+J2lOHjHp2BPS4S1JjzOEz57/icyVH0YtCIPa\nMitNJ0rdA4I+QOqAby6KvUXRmf3KyPORgZ6KTJuUfrGHN6k/4ivP/UL5Jqy7T7sU\nfff8MorcRQYrZ+6TzfRJcufqrowRINxx6c/7hgpWK+Rk03Bsa9hcgKsdOtRlRakS\nK46n6f7kFwWrI5r+vo1ZmjnBstqHPOKsBZ7/3JG+APhsHi32TU8OK6gbWDLpLdvs\nhc+RNS4vAgMBAAECggEAARhQRV4LaCLFLMG26njtZkv20pnW3stmh9mJfjU+pMvM\nhnnAIuBbSWPU9GunQ3erlwzYC2bUiehR1CghJMzkvuOMeMCLeYEVYRJ4/7O7FErd\nP+m57AJI1jWLETOuToxHOLF1ZOZ+BFt6zU3uIDom7KnLaZoBXHcH9e8DNRwH44MH\nNwUnKaP7sz4HroziSpb1rmS8YbJL7x60KW3xT+aaAEJuawBOi+pFUVRdsdRgzA4h\nR5vkc7VNl5kpT551pELH5PflEXxg016gTTx2g30w/6s69OIEcyoHdSCitxVhlI7x\nbr1e8E0nqXrk6iDq76FkbhcClszj0nI2g15pjg0uIQKBgQDv+HDbqyo/ibbNhert\nsGkuifysWp/n091WL+cP/X/VYkLz5C7o8nky2gGdw/zGwGM4DTPPi9gnqF1VlG/O\nnVeQynK/adYpmEt3kYPIN+c7w6eAy1P2Uj0jxC8kQAdevbFuzpaqE2TmDsl0f8ma\nT5sq3k2KTWr1+FN7c+skppckSwKBgQDTWQqBwtb3wpGugqCiLOZsI/DOYeUbOcOg\nyzrRpY09+ix3+tpSvpgL2QzV8vjJuIb8XyvAAwNYxo9oQVEmo79cKjuZDme+xJHT\nrkoIb0bkwbn+CnhSK4ns2YOyIcxPYiWHuJX6BiiKaT+Pc1v9v0dNErynrP/NRcuQ\nWrzhjtlHLQKBgQCux3/Drv49ettHA/PhHOzu9ZewHO18l2YNYSRlFBioXUIwixDT\nn89Ah2JH+zg/tl5Ns+f5kXxlHg6kx1FL5nOhxKIg4kAW2ZKVysl16amkcNOuTemg\nbbOUOk6vk2cKzRTPhO5df3SszzZRgMVge/yjE3jcc5ilADIlp38rmZ5Z0wKBgF/A\nq532pGZD5LTnwdc3+H1uGx+mAqK/HP6wlMl+8+rseVEyec+bQk+72rDkEAt0atPU\nWoH324BRFY/qZ9XVwlEDYVUKzb4EWP1KrYf8wmXJz3ZlT/YKe8avFZeS8HnWwaIn\n4usP9zYeUQmw/jCMhMVKg+aD3rElugCA26plidNRAoGBAL39oowsF60ArXfTMxzm\nFvt1hUGf6T5I356LZbYeAtKnuT67iVsiCG7XzWQHhsh7FsLaSHjOHWtoQbM/8lnG\nTCnJ0P1W8WCSa7YfjlfGw7ekdHxHkaiB1qgxddT5LYSy4vXlLj5kVdEs11EYQ6qF\nyNUYHw36lza708hJcZqIy+eR\n-----END PRIVATE KEY-----\n',
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
            config.resolve.fallback.tls = false;
            config.resolve.fallback.net = false;
            config.resolve.fallback.child_process = false;
        }

        return config;
    },
  };