mos = {
    "objectName": "WPTOOL",
    "className": "psdi.app.workorder.WPToolSet",
    "description": "Work Plan Tool View",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "WPITEMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "WPTOOL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "WPTOOL",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPTOOL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Work Plan Tool",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPTOOL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Work Plan Tool",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "STORELOCSITE, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "WPTOOL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "WPTOOL",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "WPTOOL",
            "parentKeys": "JOBLABORID",
            "targetKeys": "WPLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WPTOOL",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued To",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WPTOOL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPTOOL",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 249",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPTOOL",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 250",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPTOOL",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WPTOOL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WPTOOL",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Tool ordered on this PR",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "WPTOOL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 323",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Tools",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 119",
            "longDescription": null
        },
        {
            "objectName": "WPITEM",
            "targetObject": "WPTOOL",
            "parentKeys": "WPITEMID",
            "targetKeys": "WPITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Item",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": true,
            "title": "Catalog code",
            "remarks": "Catalog code for the item or vendor part number",
            "sameAsAttribute": "CATALOGCODE",
            "sameAsObject": "INVENTORY",
            "viewColumnName": "CATALOGCODE",
            "tableName": "WPITEM",
            "tableColumnName": "CATALOGCODE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the tool. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM",
            "viewColumnName": "DESCRIPTION",
            "tableName": "WPITEM",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description for the item",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIRECTREQ",
            "required": true,
            "persistent": true,
            "title": "Direct Req",
            "remarks": "This is to signify if the item on this reservation will be ordered outside of standard in",
            "sameAsAttribute": "DIRECTREQ",
            "sameAsObject": "INVRESERVE",
            "viewColumnName": "DIRECTREQ",
            "tableName": "WPITEM",
            "tableColumnName": "DIRECTREQ"
        },
        {
            "attributeName": "DISPLAYTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Task",
            "sameAsAttribute": "DISPLAYTASKID",
            "sameAsObject": "WPITEM"
        },
        {
            "attributeName": "DISPLAYWONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ISSUETO",
            "required": false,
            "persistent": true,
            "title": "Issue To",
            "remarks": "Identifies the labor to which the tool is issued",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR",
            "viewColumnName": "ISSUETO",
            "tableName": "WPITEM",
            "tableColumnName": "ISSUETO"
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Tool",
            "remarks": "Identifies the tool.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM",
            "viewColumnName": "ITEMNUM",
            "tableName": "WPITEM",
            "tableColumnName": "ITEMNUM"
        },
        {
            "attributeName": "ITEMQTY",
            "required": true,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity of the tool required for the planned work.",
            "sameAsAttribute": "ITEMQTY",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "ITEMQTY",
            "tableName": "WPITEM",
            "tableColumnName": "ITEMQTY"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set ID",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS",
            "viewColumnName": "ITEMSETID",
            "tableName": "WPITEM",
            "tableColumnName": "ITEMSETID"
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "The calculated cost for the tool. Maximo derives the value as: (Tool Hours) x (Rate).",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "WPITEM",
            "viewColumnName": "LINECOST",
            "tableName": "WPITEM",
            "tableColumnName": "LINECOST"
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Line type. The value of line type could be Item, Material, Service, Special Order or External Catalog Item.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE",
            "viewColumnName": "LINETYPE",
            "tableName": "WPITEM",
            "tableColumnName": "LINETYPE"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Storeroom location of the tool. You can edit this field if the work order's status allows work plan tool edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS",
            "viewColumnName": "LOCATION",
            "tableName": "WPITEM",
            "tableColumnName": "LOCATION"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the item",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "MANUFACTURER",
            "tableName": "WPITEM",
            "tableColumnName": "MANUFACTURER"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "Model number for the item or manufacturer part number",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY",
            "viewColumnName": "MODELNUM",
            "tableName": "WPITEM",
            "tableColumnName": "MODELNUM"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Order unit for the item",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT",
            "viewColumnName": "ORDERUNIT",
            "tableName": "WPITEM",
            "tableColumnName": "ORDERUNIT"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "WPITEM",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "PR",
            "required": false,
            "persistent": true,
            "title": "PR",
            "remarks": "Number identifying Prline of PR for direct issue.",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR",
            "viewColumnName": "PR",
            "tableName": "WPITEM",
            "tableColumnName": "PR"
        },
        {
            "attributeName": "PRLINENUM",
            "required": false,
            "persistent": true,
            "title": "PR Line",
            "remarks": "Number identifying Prline of PR for direct issue.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE",
            "viewColumnName": "PRLINENUM",
            "tableName": "WPITEM",
            "tableColumnName": "PRLINENUM"
        },
        {
            "attributeName": "REQUESTBY",
            "required": false,
            "persistent": true,
            "title": "Requested by",
            "remarks": "Person requesting item.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "REQUESTBY",
            "tableName": "WPITEM",
            "tableColumnName": "REQUESTBY"
        },
        {
            "attributeName": "REQUESTNUM",
            "required": false,
            "persistent": true,
            "title": "Request #",
            "remarks": "Link to InvReserve",
            "sameAsAttribute": "REQUESTNUM",
            "sameAsObject": "INVRESERVE",
            "viewColumnName": "REQUESTNUM",
            "tableName": "WPITEM",
            "tableColumnName": "REQUESTNUM"
        },
        {
            "attributeName": "REQUIREDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date item is needed.",
            "sameAsAttribute": "REQUIREDATE",
            "sameAsObject": "WPITEM",
            "viewColumnName": "REQUIREDATE",
            "tableName": "WPITEM",
            "tableColumnName": "REQUIREDATE"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "WPITEM",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task for which the tool will be used.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WPITEM"
        },
        {
            "attributeName": "UNITCOST",
            "required": true,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Item Unit Cost when work order was approved",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "WPITEM",
            "viewColumnName": "UNITCOST",
            "tableName": "WPITEM",
            "tableColumnName": "UNITCOST"
        },
        {
            "attributeName": "UNITCOSTHASCHANGED",
            "required": true,
            "persistent": true,
            "title": "Unit Cost Changed",
            "remarks": "Flag tracks if the unit cost has been overwritten by user. If N - field will be overwritten by MAXIMO on Approval. If Y - field will not be overwritten by MAXIMO on Approval.",
            "sameAsAttribute": "UNITCOSTHASCHANGED",
            "sameAsObject": "WPITEM",
            "viewColumnName": "UNITCOSTHASCHANGED",
            "tableName": "WPITEM",
            "tableColumnName": "UNITCOSTHASCHANGED"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Suggested vendor to order item from.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES",
            "viewColumnName": "VENDOR",
            "tableName": "WPITEM",
            "tableColumnName": "VENDOR"
        },
        {
            "attributeName": "VENDORPACKCODE",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Code",
            "remarks": "Vendor pack code for the item",
            "sameAsAttribute": "VENDORPACKCODE",
            "sameAsObject": "MRLINE",
            "viewColumnName": "VENDORPACKCODE",
            "tableName": "WPITEM",
            "tableColumnName": "VENDORPACKCODE"
        },
        {
            "attributeName": "VENDORPACKQUANTITY",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Quantity",
            "remarks": "Vendor pack quantity for the item",
            "sameAsAttribute": "VENDORPACKQUANTITY",
            "sameAsObject": "MRLINE",
            "viewColumnName": "VENDORPACKQUANTITY",
            "tableName": "WPITEM",
            "tableColumnName": "VENDORPACKQUANTITY"
        },
        {
            "attributeName": "VENDORUNITCOST",
            "required": false,
            "persistent": true,
            "title": "Vendor Unit Cost",
            "remarks": "Unit cost in vendor currency",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "WPITEM",
            "viewColumnName": "VENDORUNITCOST",
            "tableName": "WPITEM",
            "tableColumnName": "VENDORUNITCOST"
        },
        {
            "attributeName": "VENDORWAREHOUSE",
            "required": false,
            "persistent": true,
            "title": "Vendor Warehouse",
            "remarks": "Vendor warehouse for the item",
            "sameAsAttribute": "VENDORWAREHOUSE",
            "sameAsObject": "MRLINE",
            "viewColumnName": "VENDORWAREHOUSE",
            "tableName": "WPITEM",
            "tableColumnName": "VENDORWAREHOUSE"
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Plan Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER",
            "viewColumnName": "WONUM",
            "tableName": "WPITEM",
            "tableColumnName": "WONUM"
        },
        {
            "attributeName": "WPM1",
            "required": false,
            "persistent": true,
            "title": "Wpm1",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM1",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "WPM1",
            "tableName": "WPITEM",
            "tableColumnName": "WPM1"
        },
        {
            "attributeName": "WPM2",
            "required": false,
            "persistent": true,
            "title": "Wpm2",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM2",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "WPM2",
            "tableName": "WPITEM",
            "tableColumnName": "WPM2"
        },
        {
            "attributeName": "WPM3",
            "required": false,
            "persistent": true,
            "title": "Wpm3",
            "remarks": "Extra filed",
            "sameAsAttribute": "JM3",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "WPM3",
            "tableName": "WPITEM",
            "tableColumnName": "WPM3"
        },
        {
            "attributeName": "WPM4",
            "required": false,
            "persistent": true,
            "title": "Wpm4",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM4",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "WPM4",
            "tableName": "WPITEM",
            "tableColumnName": "WPM4"
        },
        {
            "attributeName": "WPM5",
            "required": false,
            "persistent": true,
            "title": "Wpm4",
            "remarks": "Extra field",
            "sameAsAttribute": "JM5",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "WPM5",
            "tableName": "WPITEM",
            "tableColumnName": "WPM5"
        },
        {
            "attributeName": "WPM6",
            "required": false,
            "persistent": true,
            "title": "Wpm6",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM6",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "WPM6",
            "tableName": "WPITEM",
            "tableColumnName": "WPM6"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition of the item planned for a given work order",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION",
            "viewColumnName": "CONDITIONCODE",
            "tableName": "WPITEM",
            "tableColumnName": "CONDITIONCODE"
        },
        {
            "attributeName": "WPITEMID",
            "required": true,
            "persistent": true,
            "title": "WPITEMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "WPITEMID",
            "sameAsObject": "WPITEM",
            "viewColumnName": "WPITEMID",
            "tableName": "WPITEM",
            "tableColumnName": "WPITEMID"
        },
        {
            "attributeName": "STORELOCSITE",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Identifies the site in which the storeroom is located.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "STORELOCSITE",
            "tableName": "WPITEM",
            "tableColumnName": "STORELOCSITE"
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
            "tableName": "WPITEM",
            "tableColumnName": "LANGCODE"
        },
        {
            "attributeName": "RATE",
            "required": true,
            "persistent": true,
            "title": "Rate",
            "remarks": "Hourly rate for the tool. If you modify this field, Maximo recalculates the Line Cost field on the Tools subtab, and the Current Estimate Tool Cost in the View Costs dialog box. You can edit this field if the work order's status allows work plan tool edits. Work Order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "RATE",
            "sameAsObject": "WPITEM",
            "viewColumnName": "RATE",
            "tableName": "WPITEM",
            "tableColumnName": "RATE"
        },
        {
            "attributeName": "RESERVEREQ",
            "required": true,
            "persistent": false,
            "title": "Reservation Required",
            "remarks": "Specifies whether the technician will need to get the tool from a storeroom (make a reservation) or provide it himself. If the check box is cleared (the default), no reservation is required. If the check box is selected, a reservation is required.When you select the Reservation Required check box, you must specify the storeroom from which to get the tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RATEHASCHANGED",
            "required": true,
            "persistent": true,
            "title": "Rate Changed ",
            "remarks": "Indicates whether a user has overwritten the value in the Rate field. If the check box is cleared (the default), and the tool's rate has changed since the tool was planned, Maximo overwrites the Rate field on approval. If the check box is selected, Maximo does not overwrite the Rate field on approval.",
            "sameAsAttribute": "RATEHASCHANGED",
            "sameAsObject": "WPITEM",
            "viewColumnName": "RATEHASCHANGED",
            "tableName": "WPITEM",
            "tableColumnName": "RATEHASCHANGED"
        },
        {
            "attributeName": "HOURS",
            "required": true,
            "persistent": true,
            "title": "Tool Hours",
            "remarks": "Number of hours for which the tool will be used for the work.",
            "sameAsAttribute": "HOURS",
            "sameAsObject": "WPITEM",
            "viewColumnName": "HOURS",
            "tableName": "WPITEM",
            "tableColumnName": "HOURS"
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
            "tableName": "WPITEM",
            "tableColumnName": "HASLD"
        },
        {
            "attributeName": "MKTPLCITEM",
            "required": true,
            "persistent": true,
            "title": "Marketplace Item",
            "remarks": "Flag to determine the items from the marketplace.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MKTPLCITEM",
            "tableName": "WPITEM",
            "tableColumnName": "MKTPLCITEM"
        },
        {
            "attributeName": "RESTYPE",
            "required": false,
            "persistent": true,
            "title": "Reservation Type",
            "remarks": "Specify the type of reservation depending on whether it is a firm request for material or not (hard or soft). The reservation type may also be set to automatic, in which case the reservation type (APHARD or APSOFT) is generated depending on the urgency of the order.",
            "sameAsAttribute": "RESTYPE",
            "sameAsObject": "WPITEM",
            "viewColumnName": "RESTYPE",
            "tableName": "WPITEM",
            "tableColumnName": "RESTYPE"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW",
            "viewColumnName": "AMCREW",
            "tableName": "WPITEM",
            "tableColumnName": "AMCREW"
        },
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "The type of crew that should perform the work.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT",
            "viewColumnName": "AMCREWTYPE",
            "tableName": "WPITEM",
            "tableColumnName": "AMCREWTYPE"
        },
        {
            "attributeName": "WPLABORREF",
            "required": false,
            "persistent": true,
            "title": "Crew Reference",
            "remarks": "This field identifies tool records to the associated joblabor record.",
            "sameAsAttribute": "JOBLABORID",
            "sameAsObject": "JOBLABOR",
            "viewColumnName": "WPLABORREF",
            "tableName": "WPITEM",
            "tableColumnName": "WPLABORREF"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "linetype in (select value from synonymdomain where domainid='LINETYPE' and maxvalue = ('TOOL'))"
    },
    "outgoingRelationships": [
        {
            "name": "PLUSCASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum = :plusassetnum",
            "cardinality": null
        },
        {
            "name": "INVENTORYSTATUS",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find inventory record for wpTool item with valid status.  (inventory.itemnum = wptool.itemnum and inventory.location = wptool.location and inventory.itemsetid = wptool.itemsetid and inventory.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:storelocsite and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SKDTOOLINV",
            "target": "INVENTORY",
            "remarks": "Get inventory for wptool",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:storelocsite",
            "cardinality": null
        },
        {
            "name": "TOOL",
            "target": "ITEM",
            "remarks": "Relationship to the Tool(Item) table, used to find the tool(item) for a given work plan tool. (itemnum=:itemnum and itemtype=:linetype and itemsetid=:itemsetid and orgid=:orgid). This resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemtype=:linetype and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the tool records for a given work plan tool line (item.itemnum = wptool.itemnum and item.itemsetid = wptool.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCITEM",
            "target": "ITEM",
            "remarks": null,
            "whereClause": "itemnum=:pluscitemnum",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for all organizations using this item. (itemorginfo.itemnum=wptool.itemnum and itemorginfo.itemsetid=wptool.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for wptool item with valid status. (itemorginfo.itemnum=wptool.itemnum and itemorginfo.itemsetid=wptool.itemsetid and itemorginfo.orgid=:wptool.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object. ",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the matusetrans for a given work plan tool. (matusetrans.itemnum=wptool.itemnum and matusetrans.refwo=wptool.wonum and matusetrans.itemsetid = wptool.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and itemnum=:itemnum and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLITEM",
            "target": "TOOLITEM",
            "remarks": "Relationship to the Tool(Item) table, used to find the tool(item) for a given work plan tool. (itemnum=:itemnum and itemsetid=:itemsetid). This resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLTRANS",
            "target": "TOOLTRANS",
            "remarks": "Relationship to the ToolTrans table, used to find the tooltrans for a given work plan tool(item). (refwo=:wonum and itemnum=:itemnum ). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and itemnum=:itemnum and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship from wptool to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WPTOOL",
            "source": "WORKORDER",
            "remarks": "Relationship to the WPTool table, used to find all workplan tools for a work order. (WPTool.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPTOOL_QBE",
            "source": "WORKORDER",
            "remarks": "Relationship from workorder to wptool for qbe ",
            "whereClause": "exists (select 1 from workorder yy where ((yy.istask = :yes and yy.parent = :wonum ) or (yy.wonum = :wonum)) and wptool.wonum = yy.wonum and yy.siteid = :siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REP_PLANTOOL",
            "source": "WORKORDER",
            "remarks": "Relationship that returns all planned tools for given Work Order, including the tools for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(wonum=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and wptool.siteid=w.siteid and wptool.wonum=w.wonum)) and wptool.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWPLANTOOL",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowPlanTool Set used by UI for display. This is a  special MboSet used for displaying the planned tool for a given workorder. (wonum in (select wonum from workorder where wptool.wonum=workorder.wonum or wptool.parent=workorder.wonum and wptool.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPLANTOOL",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowAllPlanToolSet used by UI for display. This is a special MboSet used for displaying all work plan tools related to the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        }
    ]
}