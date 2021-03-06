mos = {
    "objectName": "SCHLEASEVIEW",
    "className": "psdi.app.contract.schedule.SchLeaseViewSet",
    "description": "Lease contract view for SCHEDULE.",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "ORGID",
        "SCHEDULENUM",
        "CONTRACTNUM",
        "REVISIONNUM",
        "SCHEDULEREV"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, SCHEDULEREV, ORGID, CONTRACTLINENUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Schedule",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, REVISIONNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "SCHEDULE",
            "targetObject": "SCHLEASEVIEW",
            "parentKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, REVISIONNUM, CONTRACTLINENUM, SCHEDULEREV",
            "targetKeys": "ORGID, SCHEDULENUM, CONTRACTNUM, SCHEDULEREV, CONTRACTLINENUM, SCHEDULEREV",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SCHEDULEID",
            "required": true,
            "persistent": true,
            "title": "Payment Schedule",
            "remarks": "Unique Id",
            "sameAsAttribute": "SCHEDULEID",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "SCHEDULEID",
            "tableName": "SCHEDULE",
            "tableColumnName": "SCHEDULEID"
        },
        {
            "attributeName": "SCHEDULENUM",
            "required": true,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Schedule number for a lease/rental contract.",
            "sameAsAttribute": "SCHEDULENUM",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "SCHEDULENUM",
            "tableName": "SCHEDULE",
            "tableColumnName": "SCHEDULENUM"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract Number.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "CONTRACTNUM",
            "tableName": "SCHEDULE",
            "tableColumnName": "CONTRACTNUM"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Contract Revision",
            "remarks": "Revision number of the contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "REVISIONNUM",
            "tableName": "SCHEDULE",
            "tableColumnName": "REVISIONNUM"
        },
        {
            "attributeName": "CONTRACTLINEID",
            "required": false,
            "persistent": true,
            "title": "Contract Line ID",
            "remarks": "Unique identifier of the Contract Line.",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "CONTRACTLINEID",
            "tableName": "SCHEDULE",
            "tableColumnName": "CONTRACTLINEID"
        },
        {
            "attributeName": "SCHEDULETYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of payment schedule.",
            "sameAsAttribute": "SCHEDULETYPE",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "SCHEDULETYPE",
            "tableName": "SCHEDULE",
            "tableColumnName": "SCHEDULETYPE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description for the schedule.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "DESCRIPTION",
            "tableName": "SCHEDULE",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "TAX1",
            "required": false,
            "persistent": true,
            "title": "Tax",
            "remarks": "Tax 1 amount.",
            "sameAsAttribute": "TAX1",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "TAX1",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX1"
        },
        {
            "attributeName": "TAX2",
            "required": false,
            "persistent": true,
            "title": "Tax 2",
            "remarks": "Tax 2 amount.",
            "sameAsAttribute": "TAX2",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "TAX2",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX2"
        },
        {
            "attributeName": "TAX3",
            "required": false,
            "persistent": true,
            "title": "Tax 3",
            "remarks": "Tax 3 amount.",
            "sameAsAttribute": "TAX3",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "TAX3",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX3"
        },
        {
            "attributeName": "TAX4",
            "required": false,
            "persistent": true,
            "title": "Tax 4",
            "remarks": "Tax 4 amount.",
            "sameAsAttribute": "TAX4",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "TAX4",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX4"
        },
        {
            "attributeName": "TAX5",
            "required": false,
            "persistent": true,
            "title": "Tax 5",
            "remarks": "Tax 5 amount.",
            "sameAsAttribute": "TAX5",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "TAX5",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX5"
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code",
            "remarks": "Tax code to be used for calculation of tax 1.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX",
            "viewColumnName": "TAX1CODE",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX1CODE"
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "Tax code to be used for calculation of tax 2.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX",
            "viewColumnName": "TAX2CODE",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX2CODE"
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "Tax code to be used for calculation of tax 3.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX",
            "viewColumnName": "TAX3CODE",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX3CODE"
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "Tax code to be used for calculation of tax 4.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX",
            "viewColumnName": "TAX4CODE",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX4CODE"
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "Tax code to be used for calculation of tax 5.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX",
            "viewColumnName": "TAX5CODE",
            "tableName": "SCHEDULE",
            "tableColumnName": "TAX5CODE"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Date these payments will begin.",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "STARTDATE",
            "tableName": "SCHEDULE",
            "tableColumnName": "STARTDATE"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Date these payments will end.",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "ENDDATE",
            "tableName": "SCHEDULE",
            "tableColumnName": "ENDDATE"
        },
        {
            "attributeName": "PERIODICPAYMENT",
            "required": false,
            "persistent": true,
            "title": "Periodic Payment",
            "remarks": "Periodic lease or rental payment as specified for each contract asset.",
            "sameAsAttribute": "PERIODICPAYMENT",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "PERIODICPAYMENT",
            "tableName": "SCHEDULE",
            "tableColumnName": "PERIODICPAYMENT"
        },
        {
            "attributeName": "LEASERATEFACTOR",
            "required": false,
            "persistent": true,
            "title": "Lease Rate Factor",
            "remarks": "Lessor pre-determined percentage used to calculate the periodic payment.",
            "sameAsAttribute": "LEASERATEFACTOR",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "LEASERATEFACTOR",
            "tableName": "SCHEDULE",
            "tableColumnName": "LEASERATEFACTOR"
        },
        {
            "attributeName": "SINGLELINE",
            "required": true,
            "persistent": true,
            "title": "Single Payment Line ",
            "remarks": "Checking this box indictaes a single invoice line will be created to consolidate all of the assets that are covered by this payment.",
            "sameAsAttribute": "SINGLELINE",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "SINGLELINE",
            "tableName": "SCHEDULE",
            "tableColumnName": "SINGLELINE"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "Use this field to indicate General Ledger Account to debit.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "GLDEBITACCT",
            "tableName": "SCHEDULE",
            "tableColumnName": "GLDEBITACCT"
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "Use this field to indicate General Ledger Account to credit.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "GLCREDITACCT",
            "tableName": "SCHEDULE",
            "tableColumnName": "GLCREDITACCT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "SCHEDULE",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "LOADEDCOST",
            "required": false,
            "persistent": true,
            "title": "Loaded Cost",
            "remarks": "Loaded cost.",
            "sameAsAttribute": "LOADEDCOST",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "LOADEDCOST",
            "tableName": "SCHEDULE",
            "tableColumnName": "LOADEDCOST"
        },
        {
            "attributeName": "TARGINVSTATUS",
            "required": false,
            "persistent": true,
            "title": "Target Invoice Status",
            "remarks": "Is the invoice created in a Entered (ENTERED) or Approved (APPR) status?",
            "sameAsAttribute": "TARGINVSTATUS",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "TARGINVSTATUS",
            "tableName": "SCHEDULE",
            "tableColumnName": "TARGINVSTATUS"
        },
        {
            "attributeName": "INCLUSIVE1",
            "required": true,
            "persistent": true,
            "title": "Include Tax 1 ",
            "remarks": "Is the Payment schedule inclusive of Tax 1?",
            "sameAsAttribute": "INCLUSIVE1",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "INCLUSIVE1",
            "tableName": "SCHEDULE",
            "tableColumnName": "INCLUSIVE1"
        },
        {
            "attributeName": "INCLUSIVE2",
            "required": true,
            "persistent": true,
            "title": "Include Tax 2 ",
            "remarks": "Is the Payment schedule inclusive of Tax 2?",
            "sameAsAttribute": "INCLUSIVE2",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "INCLUSIVE2",
            "tableName": "SCHEDULE",
            "tableColumnName": "INCLUSIVE2"
        },
        {
            "attributeName": "INCLUSIVE3",
            "required": true,
            "persistent": true,
            "title": "Include Tax 3 ",
            "remarks": "Is the Payment schedule inclusive of Tax 3?",
            "sameAsAttribute": "INCLUSIVE3",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "INCLUSIVE3",
            "tableName": "SCHEDULE",
            "tableColumnName": "INCLUSIVE3"
        },
        {
            "attributeName": "INCLUSIVE4",
            "required": true,
            "persistent": true,
            "title": "Include Tax 4 ",
            "remarks": "Is the Payment schedule inclusive of Tax 4?",
            "sameAsAttribute": "INCLUSIVE4",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "INCLUSIVE4",
            "tableName": "SCHEDULE",
            "tableColumnName": "INCLUSIVE4"
        },
        {
            "attributeName": "INCLUSIVE5",
            "required": true,
            "persistent": true,
            "title": "Include Tax 5 ",
            "remarks": "Is the Payment schedule inclusive of Tax 5?",
            "sameAsAttribute": "INCLUSIVE5",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "INCLUSIVE5",
            "tableName": "SCHEDULE",
            "tableColumnName": "INCLUSIVE5"
        },
        {
            "attributeName": "INTERIMCHARGE",
            "required": false,
            "persistent": true,
            "title": "Interim Charge",
            "remarks": "Amount of the first payment if the entire payment period is not included. If a contract begins at mid-month the first payment should be a half payment.",
            "sameAsAttribute": "INTERIMCHARGE",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "INTERIMCHARGE",
            "tableName": "SCHEDULE",
            "tableColumnName": "INTERIMCHARGE"
        },
        {
            "attributeName": "SCHEDULE",
            "required": false,
            "persistent": true,
            "title": "Schedule",
            "remarks": "Schedule using date selector.",
            "sameAsAttribute": "SCHEDULE",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "SCHEDULE",
            "tableName": "SCHEDULE",
            "tableColumnName": "SCHEDULE"
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Line Cost.",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "SCHEDULE",
            "viewColumnName": "LINECOST",
            "tableName": "SCHEDULE",
            "tableColumnName": "LINECOST"
        },
        {
            "attributeName": "TOTALCOSTPAID",
            "required": false,
            "persistent": false,
            "title": "Total Payment Amount",
            "remarks": "Total payment amount to date.",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "TOTALCOSTDUE",
            "required": false,
            "persistent": false,
            "title": "Total Outstanding Amount",
            "remarks": "Total outstanding amount due.",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "TOTALCOSTDUENEXT",
            "required": false,
            "persistent": false,
            "title": "Next Payment Amount",
            "remarks": "Next payment amount.",
            "sameAsAttribute": "TOTALCOST",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "DUEDATENEXT",
            "required": false,
            "persistent": false,
            "title": "Next Due Date",
            "remarks": "Next due date.",
            "sameAsAttribute": "DUEDATE",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": false,
            "persistent": true,
            "title": "Contract Line",
            "remarks": "Contract line number",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE",
            "viewColumnName": "CONTRACTLINENUM",
            "tableName": "SCHEDULE",
            "tableColumnName": "CONTRACTLINENUM"
        },
        {
            "attributeName": "SCHEDULEREV",
            "required": false,
            "persistent": true,
            "title": "Schedule Revision",
            "remarks": "Revision number for the Schedule.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT",
            "viewColumnName": "SCHEDULEREV",
            "tableName": "SCHEDULE",
            "tableColumnName": "SCHEDULEREV"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "scheduletype in (select value from synonymdomain where domainid ='SCHEDULETYPE' and maxvalue = 'DATE')"
    },
    "outgoingRelationships": [
        {
            "name": "CONTRACTASSET",
            "target": "CONTRACTASSET",
            "remarks": "Relationship to the Contractasset table, used to find all contract assets for this schedule. (schleaseview.contractnum = :contractasset.contractnum and schleaseview.revisionnum = :contractasset.revisionnum and schleaseview.orgid = :contractasset.orgid and contractasset.paymentschedule = :no)",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid and paymentschedule = :no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "Date selector pattern for Cron Task",
            "whereClause": "pattern = :schedule",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOICE",
            "target": "INVOICE",
            "remarks": "Relationship to the Invoice table, used to find all invoices for a given contract. (invoice.contractrefnum = schleaseview.contractnum and invoice.contractrefrev = schleaseview.revisionnum and invoice.orgid = schleaseview.orgid)",
            "whereClause": "contractrefnum = :contractnum and contractrefrev = :revisionnum and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHEDULEINVOICE",
            "target": "INVOICE",
            "remarks": "Relationship to the Invoice table, used to find all invoices for a given contract which are not cancelled. (invoice.contractrefnum = schleaseview.contractnum and invoice.contractrefrev = schleaseview.revisionnum and status not in (select synonymdomain.value from synonymdomain where synonymdomain.domainid = 'IVSTATUS' and synonymdomain.maxvalue = 'CANCEL') and invoice.orgid = schleaseview.orgid)",
            "whereClause": "contractrefnum = :contractnum and contractrefrev = :revisionnum and status not in (select value from synonymdomain where domainid = 'IVSTATUS' and maxvalue = 'CANCEL') and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHEDULELINE",
            "target": "SCHEDULELINE",
            "remarks": "Relationship to the Scheduleline table, used to find all schedule lines for a given schedule. (schleaseview.scheduleid = :scheduleline.scheduleid and schleaseview.orgid= :scheduleline.orgid)",
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SCHLEASEVIEW",
            "source": "INVOICE",
            "remarks": "Relationship to the SchLeaseView view, used to find the lease contract schedule for a given invoice. (schleaseview.scheduleid = invoice.scheduleid and schleaseview.orgid = invoice.orgid)",
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHLEASEVIEW",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the Schleaseview view, used to find all lease schedules for a given lease contract. (leaseview.contractnum = :schleaseview.contractnum and leaseview.revisionnum = :schleaseview.revisionnum and leaseview.orgid= :schleaseview.orgid)",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid= :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCHLEASEVIEW",
            "source": "SCHEDULELINE",
            "remarks": "Relationship to the Schedule table, used to find parent of the schedule line. (schleaseview.scheduleid = :scheduleline.scheduleid and schleaseview.orgid= :scheduleline.orgid)",
            "whereClause": "scheduleid = :scheduleid and orgid= :orgid",
            "cardinality": null
        }
    ]
}