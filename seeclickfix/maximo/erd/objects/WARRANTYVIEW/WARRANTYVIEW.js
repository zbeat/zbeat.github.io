mos = {
    "objectName": "WARRANTYVIEW",
    "className": "psdi.app.contract.warranty.WarrantyViewSet",
    "description": "A View of the Contract table",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMPANIES",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company on Warranty Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, MASTERREVNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CURRENCY",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "CURRENCYCODE",
            "targetKeys": "CURRENCYCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Currency",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WARRANTYVIEW",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEAGENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Agent",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Unique ID number for the current warranty contract.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTRACTNUM"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the current warranty contract.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR",
            "viewColumnName": "DESCRIPTION",
            "tableName": "CONTRACT",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "MASTERNUM",
            "required": false,
            "persistent": true,
            "title": "Master Contract",
            "remarks": "The unique identification number of a Master Contract from which this contract was created.",
            "sameAsAttribute": "MASTERNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "MASTERNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "MASTERNUM"
        },
        {
            "attributeName": "VENDORREFNUM",
            "required": false,
            "persistent": true,
            "title": "Vendor Reference #",
            "remarks": "A unique identification code issued to a vendor.",
            "sameAsAttribute": "VENDORREFNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "VENDORREFNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "VENDORREFNUM"
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Indicator of the current contract type.",
            "sameAsAttribute": "CONTRACTTYPE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTTYPE",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTRACTTYPE"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "REVISIONNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "REVISIONNUM"
        },
        {
            "attributeName": "PURCHASEAGENT",
            "required": false,
            "persistent": true,
            "title": "Buyer",
            "remarks": "The current buyer, or purchasing agent listed on this contract.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "PURCHASEAGENT",
            "tableName": "CONTRACT",
            "tableColumnName": "PURCHASEAGENT"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Current status of this contract.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "STATUS",
            "tableName": "CONTRACT",
            "tableColumnName": "STATUS"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Status date.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "STATUSDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "STATUSDATE"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The date on which the contract becomes active.",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "STARTDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "STARTDATE"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Date after which the contract is no longer valid.",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "ENDDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "ENDDATE"
        },
        {
            "attributeName": "RENEWALDATE",
            "required": false,
            "persistent": true,
            "title": "Renewal Date",
            "remarks": "Date that the contract can or must be be renewed to remain active.",
            "sameAsAttribute": "RENEWALDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "RENEWALDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "RENEWALDATE"
        },
        {
            "attributeName": "EXTENDABLE",
            "required": true,
            "persistent": true,
            "title": "Extendable",
            "remarks": "Checking this box indicates the contract is extendable.",
            "sameAsAttribute": "EXTENDABLE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "EXTENDABLE",
            "tableName": "CONTRACT",
            "tableColumnName": "EXTENDABLE"
        },
        {
            "attributeName": "AUTOEXTENDPERIOD",
            "required": false,
            "persistent": true,
            "title": "Extension Period",
            "remarks": "If the contract is extendable, this field indicates the auto extend period in days.",
            "sameAsAttribute": "AUTOEXTENDPERIOD",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "AUTOEXTENDPERIOD",
            "tableName": "CONTRACT",
            "tableColumnName": "AUTOEXTENDPERIOD"
        },
        {
            "attributeName": "CONDFOREXT",
            "required": false,
            "persistent": true,
            "title": "Condition for Extension",
            "remarks": "Details any conditions that may exist for an extension.",
            "sameAsAttribute": "CONDFOREXT",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONDFOREXT",
            "tableName": "CONTRACT",
            "tableColumnName": "CONDFOREXT"
        },
        {
            "attributeName": "CUSTTERMALLOWED",
            "required": true,
            "persistent": true,
            "title": "Customer Termination Allowed",
            "remarks": "Checking this box indicates that early termination by the customer is allowed.",
            "sameAsAttribute": "CUSTTERMALLOWED",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CUSTTERMALLOWED",
            "tableName": "CONTRACT",
            "tableColumnName": "CUSTTERMALLOWED"
        },
        {
            "attributeName": "CUSTNOTIFYPERIOD",
            "required": false,
            "persistent": true,
            "title": "Customer Notification Period",
            "remarks": "If early termination by the customer is allowed this is the customer notification period in days.",
            "sameAsAttribute": "CUSTNOTIFYPERIOD",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CUSTNOTIFYPERIOD",
            "tableName": "CONTRACT",
            "tableColumnName": "CUSTNOTIFYPERIOD"
        },
        {
            "attributeName": "VENDTERMALLOWED",
            "required": true,
            "persistent": true,
            "title": "Vendor Termination Allowed",
            "remarks": "Checking this box indicates that early termination is allowed by vendor.",
            "sameAsAttribute": "VENDTERMALLOWED",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "VENDTERMALLOWED",
            "tableName": "CONTRACT",
            "tableColumnName": "VENDTERMALLOWED"
        },
        {
            "attributeName": "VENDNOTIFYPERIOD",
            "required": false,
            "persistent": true,
            "title": "Vendor Notification Period",
            "remarks": "If early termination is allowed by vendor, this indicates the notice of termination in days.",
            "sameAsAttribute": "VENDNOTIFYPERIOD",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "VENDNOTIFYPERIOD",
            "tableName": "CONTRACT",
            "tableColumnName": "VENDNOTIFYPERIOD"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "A unique code indicating the vendor of the current warranty contract.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "VENDOR",
            "tableName": "CONTRACT",
            "tableColumnName": "VENDOR"
        },
        {
            "attributeName": "CONTACT",
            "required": false,
            "persistent": true,
            "title": "Contact",
            "remarks": "The name of the person employed by the vendor to contact with queries about this contract.",
            "sameAsAttribute": "CONTACT",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "CONTACT",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTACT"
        },
        {
            "attributeName": "FREIGHTTERMS",
            "required": false,
            "persistent": true,
            "title": "Freight Terms",
            "remarks": "The agreed upon terms related to shipping and receiving associated with this contract.",
            "sameAsAttribute": "FREIGHTTERMS",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "FREIGHTTERMS",
            "tableName": "CONTRACT",
            "tableColumnName": "FREIGHTTERMS"
        },
        {
            "attributeName": "PAYMENTTERMS",
            "required": false,
            "persistent": true,
            "title": "Payment Terms",
            "remarks": "The agreed upon terms related to monetary payments associated with this contract.",
            "sameAsAttribute": "PAYMENTTERMS",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "PAYMENTTERMS",
            "tableName": "CONTRACT",
            "tableColumnName": "PAYMENTTERMS"
        },
        {
            "attributeName": "SHIPVIA",
            "required": false,
            "persistent": true,
            "title": "Ship Via",
            "remarks": "The name of the shipping company to use for transporting items associated withthis contract.",
            "sameAsAttribute": "SHIPVIA",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "SHIPVIA",
            "tableName": "CONTRACT",
            "tableColumnName": "SHIPVIA"
        },
        {
            "attributeName": "CUSTOMERNUM",
            "required": false,
            "persistent": true,
            "title": "Customer #",
            "remarks": "The unique number issued by the vendor to identify our company.",
            "sameAsAttribute": "CUSTOMERNUM",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "CUSTOMERNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "CUSTOMERNUM"
        },
        {
            "attributeName": "FOB",
            "required": false,
            "persistent": true,
            "title": "FOB Point",
            "remarks": "The point at which merchandise is on board a vehicle and in transit.",
            "sameAsAttribute": "FOB",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "FOB",
            "tableName": "CONTRACT",
            "tableColumnName": "FOB"
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Total Cost",
            "remarks": "The sum of all the costs on the contract lines on the current warranty contract.",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "PO",
            "viewColumnName": "TOTALCOST",
            "tableName": "CONTRACT",
            "tableColumnName": "TOTALCOST"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "The login name of the person who last changed the contract.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "CHANGEBY",
            "tableName": "CONTRACT",
            "tableColumnName": "CHANGEBY"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "The date on which the contract was last altered.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CHANGEDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History",
            "remarks": "History flag.",
            "sameAsAttribute": "HISTORYFLAG",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "HISTORYFLAG",
            "tableName": "CONTRACT",
            "tableColumnName": "HISTORYFLAG"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": true,
            "title": "Currency",
            "remarks": "Indicates the currency used to satisfy monetary transactions associated with this contract.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY",
            "viewColumnName": "CURRENCYCODE",
            "tableName": "CONTRACT",
            "tableColumnName": "CURRENCYCODE"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate",
            "remarks": "Exchange rate the time of contract approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE",
            "viewColumnName": "EXCHANGERATE",
            "tableName": "CONTRACT",
            "tableColumnName": "EXCHANGERATE"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Exchange Rate2",
            "remarks": "Exchange rate2 at the time of contract approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE",
            "viewColumnName": "EXCHANGERATE2",
            "tableName": "CONTRACT",
            "tableColumnName": "EXCHANGERATE2"
        },
        {
            "attributeName": "EXCHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "ExDate Changed",
            "remarks": "Date of the exchange rate.",
            "sameAsAttribute": "EXCHANGEDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "EXCHANGEDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "EXCHANGEDATE"
        },
        {
            "attributeName": "BUYAHEAD",
            "required": true,
            "persistent": true,
            "title": "Buy Ahead",
            "remarks": "Is this a buy ahead rate, ie entered directly by the user and not calculated from the list of active exchange rate.",
            "sameAsAttribute": "BUYAHEAD",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "BUYAHEAD",
            "tableName": "CONTRACT",
            "tableColumnName": "BUYAHEAD"
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Include Tax 1",
            "remarks": "Is the PO total inclusive of Tax 1",
            "sameAsAttribute": "INCLUSIVE1",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE1",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE1"
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2",
            "remarks": "Is the PO total inclusive of Tax 2.",
            "sameAsAttribute": "INCLUSIVE2",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE2",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE2"
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3",
            "remarks": "Is the PO total inclusive of Tax 3.",
            "sameAsAttribute": "INCLUSIVE3",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE3",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE3"
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4",
            "remarks": "Is the PO total inclusive of Tax 4.",
            "sameAsAttribute": "INCLUSIVE4",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE4",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE4"
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5",
            "remarks": "Is the PO total inclusive of Tax 5.",
            "sameAsAttribute": "INCLUSIVE5",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INCLUSIVE5",
            "tableName": "CONTRACT",
            "tableColumnName": "INCLUSIVE5"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID.",
            "sameAsAttribute": "EXTERNALREFID",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "EXTERNALREFID",
            "tableName": "CONTRACT",
            "tableColumnName": "EXTERNALREFID"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner system ID.",
            "sameAsAttribute": "OWNERSYSID",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "OWNERSYSID",
            "tableName": "CONTRACT",
            "tableColumnName": "OWNERSYSID"
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (MEA).",
            "sameAsAttribute": "SENDERSYSID",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "SENDERSYSID",
            "tableName": "CONTRACT",
            "tableColumnName": "SENDERSYSID"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "CONTRACT",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "TOTALBASECOST",
            "required": true,
            "persistent": true,
            "title": "Total Base Cost",
            "remarks": "Cost of the entire contract in base currency 1.",
            "sameAsAttribute": "TOTALBASECOST",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "TOTALBASECOST",
            "tableName": "CONTRACT",
            "tableColumnName": "TOTALBASECOST"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "A detailed description of the current warranty contract.",
            "sameAsAttribute": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "FREIGHTTERMS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Freight Terms Long Description",
            "remarks": "Freight Terms Long Description",
            "sameAsAttribute": "FREIGHTTERMS_LONGDESCRIPTION",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "POREQUIRED",
            "required": true,
            "persistent": true,
            "title": "PO Required",
            "remarks": "Checking this box indicates a PO is required for this contract.",
            "sameAsAttribute": "POREQUIRED",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "POREQUIRED",
            "tableName": "CONTRACT",
            "tableColumnName": "POREQUIRED"
        },
        {
            "attributeName": "PAYMENTSCHED",
            "required": true,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Checking this box idicates there is a payment schedule for this contract.",
            "sameAsAttribute": "PAYMENTSCHED",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "PAYMENTSCHED",
            "tableName": "CONTRACT",
            "tableColumnName": "PAYMENTSCHED"
        },
        {
            "attributeName": "HASINSURANCE",
            "required": true,
            "persistent": true,
            "title": "Has Insurance",
            "remarks": "Does this vendor have a current insurance policy ?",
            "sameAsAttribute": "HASINSURANCE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "HASINSURANCE",
            "tableName": "CONTRACT",
            "tableColumnName": "HASINSURANCE"
        },
        {
            "attributeName": "INSURANCEEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Insurance Expiration Date",
            "remarks": "Expiration date of the vendors insurance policy.",
            "sameAsAttribute": "INSURANCEEXPDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "INSURANCEEXPDATE",
            "tableName": "CONTRACT",
            "tableColumnName": "INSURANCEEXPDATE"
        },
        {
            "attributeName": "CONTRACTID",
            "required": true,
            "persistent": true,
            "title": "CONTRACTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "CONTRACTID",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTID",
            "tableName": "CONTRACT",
            "tableColumnName": "CONTRACTID"
        },
        {
            "attributeName": "REVCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "Revision Comments",
            "remarks": "Comments associated with the current revision of this contract.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR",
            "viewColumnName": "REVCOMMENTS",
            "tableName": "CONTRACT",
            "tableColumnName": "REVCOMMENTS"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE",
            "viewColumnName": "LANGCODE",
            "tableName": "CONTRACT",
            "tableColumnName": "LANGCODE"
        },
        {
            "attributeName": "MASTERREVNUM",
            "required": false,
            "persistent": true,
            "title": "Master Revision",
            "remarks": "Revision number of the master contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "MASTERREVNUM",
            "tableName": "CONTRACT",
            "tableColumnName": "MASTERREVNUM"
        },
        {
            "attributeName": "PROCESSCLAIM",
            "required": true,
            "persistent": true,
            "title": "Process Claim",
            "remarks": "Checking this box indicates a claim can be processed against this contract.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "PROCESSCLAIM",
            "tableName": "CONTRACT",
            "tableColumnName": "PROCESSCLAIM"
        },
        {
            "attributeName": "REVCOMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "REVCOMMENTS Long description",
            "remarks": "Long description or detailed comments associated with the current revision of this contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspection Required",
            "remarks": "Checking this box indicates that items ordered from this company need to be inspected on receipt.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "INSPECTIONREQUIRED",
            "tableName": "CONTRACT",
            "tableColumnName": "INSPECTIONREQUIRED"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "HASLD",
            "tableName": "CONTRACT",
            "tableColumnName": "HASLD"
        },
        {
            "attributeName": "ADJUSTPERCENT",
            "required": false,
            "persistent": false,
            "title": "Adjustment %",
            "remarks": "Use this field to specify the increase or decrease percentage in price for this contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "contracttype in  (select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue in  ('WARRANTY','SERVICE'))"
    },
    "outgoingRelationships": [
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find all company records for a given contract. (contract.vendor=companies.company)",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTCOMMODITY",
            "target": "CONTCOMMODITY",
            "remarks": "Relationship to the ContCommodity table, used to find all commodities for a given contract. (contcommodity.contractnum = warrantyview.contractnum and contcommodity.revisionnum=warrantyview.revisionnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMM_CONTGRP",
            "target": "CONTCOMMODITY",
            "remarks": "Relationship to the ContCommodity table used to find all commodities that dont have a parent. (warrantyview.contractnum = contcommodity.contractnum and warrantyview.revisionnum=contcommodity.revisionnum and warrantyview.orgid=contcommodity.orgid). The resulting set might contain one or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum=:revisionnum and orgid = :orgid and commodity in (select commodity from contcommodity where parent is null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTLINEASSET",
            "target": "CONTLINEASSET",
            "remarks": "Relationship to the ContLineAsset table, used to find all lines that are related to a particular asset for a given warranty contract. (warrantyasset.contractnum = contlineasset.contractnum and warrantyasset.revisionnum=contlineasset.revisionnum and warrantyasset.orgid=contlineasset.orgid and warrantyasset.assetid=contlineasset.assetid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid and assetid=:assetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTASSET",
            "target": "CONTRACTASSET",
            "remarks": "Relationship to the ContractAsset table, used to find all assets for a given lease contract. (warrantyview.contractnum = contractasset.contractnum and warrantyview.revisionnum=contractasset.revisionnum and warrantyview.orgid=contractasset.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "target": "CONTRACTAUTH",
            "remarks": "Relationship to the ContractAuth table, used to find all ContractAuth records for a given warranty contract. (contractauth.contractnum=warrantyview.contractnum). The resulting set will contain one or more records.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSTATUS",
            "target": "CONTRACTSTATUS",
            "remarks": "Relationship to the ContractStatus table, used to find all contract statuses for a given contract. (purchview.contractnum=contractstatus.contractnum and warrantyview.orgid=contractstatus.orgid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTERM",
            "target": "CONTRACTTERM",
            "remarks": "Relationship to the CONTRACTTERM table, used to find all contract term records for a given contract. (contractterm.contractnum = contract.contractnum). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTTYPETERM",
            "target": "CONTRACTTYPETERM",
            "remarks": "Relationship to the ContractTypeTerm table used to find all ContractTerms for a given Contract Type (contracttypeterm.contracttypeid=warrantyview.contracttype and contracttypeterm.orgid=warrantyview.orgid)",
            "whereClause": "contracttypeid=:contracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given master contract. (doclinks.keytable = WARRANTYVIEW and doclinks.keycolumn = CONTRACTNUM and doclinks.keyvalue = masterview.contractnum$DOCLINKS.KEYVALUE). The resulting set will contain zero or more objects. Note: The WARRANTYVIEW.CONTRACTNUM field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable='WARRANTYVIEW' and ownerid=:contractid) or (ownertable='COMPANIES' and ownerid = (select companiesid from companies where company=:vendor and orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the WARRANTYVIEW object to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONINPUT",
            "target": "REVISIONINPUT",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHWARRANTYVIEW",
            "target": "SCHWARRANTYVIEW",
            "remarks": "Relationship to the SchWarrantyView view, used to find all warranty schedules for a given warranty contract. (warrantyview.contractnum = :schwarrantyview.contractnum and warrantyview.revisionnum = :schwarrantyview.revisionnum and warrantyview.orgid= :schwarrantyview.orgid)",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTSITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to find all sites that use the same itemset and companyset as the current contract site. The resulting set will contain zero or more objects.",
            "whereClause": "orgid in (select orgid from organization where itemsetid in (select itemsetid from organization where orgid=:orgid) and companysetid in (select companysetid from organization where orgid=:orgid))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "target": "SLA",
            "remarks": "Relationship to the SLA table, used to find all slas in a status of active. (sla.status=ACTIVE). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where domainid ='SLASTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLACONTRACT",
            "target": "SLACONTRACT",
            "remarks": "Relationship to the SLAContract table, used to find all slacontracts for a given purchase contract. (warrantyview.contractnum = slacontract.contractnum). The resulting set will contain zero or more object.",
            "whereClause": "contractnum=:contractnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='CONTRACTSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WARRANTYASSET",
            "target": "WARRANTYASSET",
            "remarks": "Relationship to the WarrantyAsset table, used to find the WarrantyAsset records for a given Warranty Contract. (warrantyview.contractnum=warrantyasset.contractnum and warrantyview.revisionnum=warrantyasset.revisionum and warrantyview.orgid=warrantyasset.orgid). The resulting set will contain zero or more objects.",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWREVHIST",
            "target": "WARRANTYVIEW",
            "remarks": "Relationship to the WarrantyView table used to find all WarrantyView for a given Warranty Contract.",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WARRANTYVIEWLINE",
            "target": "WARRANTYVIEWLINE",
            "remarks": "Relationship to the WarrantyViewLine table, used to find WarrantyView line records for a given contract. (warrantyviewline.contractnum = contract.contractnum and warrantyviewline.revisionnum = contract.revisionnum and warrantyviewline.orgid = contract.orgid). The resulting set will contain zero or one object.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONLINE",
            "target": "WARRANTYVIEWLINE",
            "remarks": "Relationship to the WarrantyViewLine table used to find all ContractLines for a given Warranty Contract.",
            "whereClause": "contractnum=:contractnum and revisionnum in (:revisionnum, (select max(revisionnum) from contractline where contractnum=:contractnum and revisionnum < :revisionnum)) and contractlinenum in (select contractlinenum from contractline where contractnum=:contractnum and revstatus in (select value from synonymdomain where domainid='REVSTATUS' and maxvalue in ('ADDED','CHANGED'))  and revisionnum = :revisionnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WARRVIEWCHGSTAT",
            "target": "WARRVIEWCHGSTAT",
            "remarks": "Relationship to the non-persistent WarrViewChangeStatus object. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Change Status action page to change the status of a given warranty contract.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "VIEWREVHIST",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the WarrantyView table used to find all WarrantyView for a given Warranty Contract.",
            "whereClause": "contractnum=:contractnum and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}