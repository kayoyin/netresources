window.cmpConfig = {
  summon: "https://usadmm.dotomi.com/gdpr/check/json/current",
  brandingImg: "http://www.dummies.com/wp-content/uploads/dummies-wiley-brand-logo.png",
  redirectURL: "/favicon.ico",
  siteId: "p-dummies.com",
  vendors:[16,17,18,19,24,32,10,62,81,52,13,132,264,164],
  lang : "EN",
  localVendors : {
    version: "1.0.2",
    vendors: {
      "1":{
        isSite: true,
        name: "Dummies",
        purposeIds: [1,3,5],
        urls:{
          policyUrl: "http://www.dummies.com/privacy-policy/",
          cookiesPolicy: "https://www.wiley.com/en-us/cookies",
          audit: "https://usadmm.dotomi.com/gdpr/audit/current"
        },
        consentCookieName: "euconsent_site"
      },
      "2":{
        name: "AdExchange",
        purposeIds: [1,2,3,4,5],
        urls:{
          policyUrl: "https://policies.google.com/privacy?hl=en&gl=us",
          cookiesPolicy: "https://policies.google.com/privacy?hl=en&gl=us"
        }
      },
      "3":{
        name: "AdSense",
        purposeIds: [1,2,3,4,5],
        urls:{
          policyUrl: "https://policies.google.com/privacy?hl=en&gl=us",
          cookiesPolicy: "https://policies.google.com/privacy?hl=en&gl=us"
        }
      },
      "4":{
        name: "bRealTime",
        purposeIds: [1,2,3,4,5],
        urls:{
          policyUrl: "http://www.brealtime.com/privacy-policy/",
          cookiesPolicy: "http://www.brealtime.com/privacy-policy/"
        }
      },
      "5":{
        name: "Yieldbot",
        purposeIds: [1,2,3,4,5],
        urls:{
          policyUrl: "https://www.yieldbot.com/privacy-policy/",
          cookiesPolicy: "https://www.yieldbot.com/privacy-policy/"
        }
      }, 
      "6":{
        name: "DoubleClick",
        purposeIds: [1,2,3,4,5],
        urls:{
          policyUrl: "https://policies.google.com/privacy?hl=en&gl=us",
          cookiesPolicy: "https://policies.google.com/privacy?hl=en&gl=us"
        }
		}
	}
  },
	callbacks: { 
    onConsentAll: DummiesOnConsentAll /* when a user consents to all vendors */,
    onNoConsentAll: DummiesOnNoConsentAll /* when a user consents to no vendors */,
    onConsentSome: DummiesOnConsentSome /* when a user consents to some and not all vendors */,
    onGDPRComplete: DummiesOnGDPRComplete /* when the GDPR Consent Capture is complete */,
    onCMPShow: DummiesOnCMPShow /* Called if the CMP is shown */,
    onCMPDismiss: DummiesOnCMPDismiss /* called when CMP is dismissed, including the banner." */
  }
};