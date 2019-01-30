mos = {
    "objectName": "ADDUSER",
    "className": "psdi.app.signature.virtual.AddUserSet",
    "description": "Add User virtual object for adding a new user",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "USERNAME",
            "required": true,
            "persistent": false,
            "title": "User Name",
            "remarks": "Enter the name you want to use to log in to Maximo.",
            "sameAsAttribute": "LOGINID",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PASSWORD",
            "required": true,
            "persistent": false,
            "title": "Password",
            "remarks": "Enter the password you want to use for logging in to Maximo.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDCHECK",
            "required": true,
            "persistent": false,
            "title": "Confirm Password",
            "remarks": "Type in your password again. Maximo compares this entry with the Password field to ensure accuracy.",
            "sameAsAttribute": "PASSWORD",
            "sameAsObject": "ADDUSER"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Default Insert Site",
            "remarks": "Site you want to be your default for entering records. Click the Select Value button to select a valid site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": false,
            "title": "Supervisor",
            "remarks": "ID of your supervisor.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ADDRESS2",
            "required": false,
            "persistent": false,
            "title": "City",
            "remarks": "Address 2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS3",
            "required": false,
            "persistent": false,
            "title": "State/Province",
            "remarks": "Address 3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS1",
            "required": false,
            "persistent": false,
            "title": "Address",
            "remarks": "Address 1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PHONENUM",
            "required": false,
            "persistent": false,
            "title": "Primary Phone",
            "remarks": "Your primary phone number.",
            "sameAsAttribute": "PHONENUM",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "BIRTHDATE",
            "required": false,
            "persistent": false,
            "title": "Date of Birth",
            "remarks": "Birth Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PAGEPIN",
            "required": true,
            "persistent": false,
            "title": "Primary E-mail",
            "remarks": "Enter your e-mail address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DROPPOINT",
            "required": false,
            "persistent": false,
            "title": "Drop Point",
            "remarks": "The drop point where the items are to be delivered",
            "sameAsAttribute": "DROPPOINT",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": false,
            "title": "GL Account",
            "remarks": "When a user inserts a purchasing record with a GL account, Maximo uses this default debit GL account unless the GL account defaults from some other relationship.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTSTORELOC",
            "required": false,
            "persistent": false,
            "title": "Default Storeroom",
            "remarks": "Storeroom you want to be your default for requisitioning items. Click the Select Value button to select a valid storeroom.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "PCARDNUM",
            "required": false,
            "persistent": false,
            "title": "Procurement Card #",
            "remarks": "Procurement Card Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDTYPE",
            "required": false,
            "persistent": false,
            "title": "Procurement Card Type",
            "remarks": "Procurement Card Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDEXPDATE",
            "required": false,
            "persistent": false,
            "title": "Procurement Card Expiration Date",
            "remarks": "Procurement Card Expiration Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCARDVERIFICATION",
            "required": false,
            "persistent": false,
            "title": "Procurement Card Verification",
            "remarks": "Procurement Card Verification",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIRSTNAME",
            "required": true,
            "persistent": false,
            "title": "First Name",
            "remarks": "Enter your first name.",
            "sameAsAttribute": "FIRSTNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LASTNAME",
            "required": true,
            "persistent": false,
            "title": "Last Name",
            "remarks": "Enter your last name.",
            "sameAsAttribute": "LASTNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "EMAILTYPE",
            "required": false,
            "persistent": false,
            "title": "E-mail Type",
            "remarks": "The type of the email",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "EMAIL"
        },
        {
            "attributeName": "PHONETYPE",
            "required": false,
            "persistent": false,
            "title": "Phone Type",
            "remarks": "Type of phone number",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "PHONE"
        },
        {
            "attributeName": "ADDITIONALINFO",
            "required": false,
            "persistent": false,
            "title": "Additional Information",
            "remarks": "Additional Information about the user",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": false,
            "title": "Language",
            "remarks": "Language in which you want to work with Maximo. Click the Select Value button to select an available language.",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "LOCALE",
            "required": false,
            "persistent": false,
            "title": "Locale",
            "remarks": "Click the Select Value button to select a locale corresponding to your language subdivision.",
            "sameAsAttribute": "LOCALE",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TIMEZONE",
            "required": false,
            "persistent": false,
            "title": "Time Zone",
            "remarks": "Click the Select Value button to select the time zone in which you will be working with Maximo.",
            "sameAsAttribute": "TIMEZONE",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PWHINTQUESTION",
            "required": false,
            "persistent": false,
            "title": "Password Hint Question",
            "remarks": "Question a user or administrator chooses to have asked to verify user identity. An administrator defines password hint questions by adding values to the PWHINTQUESTION domain in the Domains application.",
            "sameAsAttribute": "PWHINTQUESTION",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "PWHINTANSWER",
            "required": false,
            "persistent": false,
            "title": "Answer",
            "remarks": "Correct answer to the password hint question.",
            "sameAsAttribute": "PWHINTANSWER",
            "sameAsObject": "MAXUSER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PWHINTDOMAIN",
            "target": "ALNDOMAIN",
            "remarks": "MaxUser to ALNDomain for PWHintQuestion",
            "whereClause": "domainid = 'PWHINTQUESTION' and value = :pwhintquestion",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}