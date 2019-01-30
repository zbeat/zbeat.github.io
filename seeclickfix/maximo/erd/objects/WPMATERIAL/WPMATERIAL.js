mos = {
    "objectName": "WPMATERIAL",
    "className": "psdi.app.workorder.WPMaterialSet",
    "description": "The WPMATERIAL View",
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
            "targetObject": "WPMATERIAL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "WPMATERIAL",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Work Plan Material",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Work Plan Material",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "STORELOCSITE, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "WPMATERIAL",
            "parentKeys": "JOBLABORID",
            "targetKeys": "WPLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued To",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WPMATERIAL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPMATERIAL",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 245",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPMATERIAL",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 246",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPMATERIAL",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WPMATERIAL",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Material ordered on this PR",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 319",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Material",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 115",
            "longDescription": null
        },
        {
            "objectName": "WPITEM",
            "targetObject": "WPMATERIAL",
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
            "title": "Catalog #",
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
            "remarks": "Describes the item. To enter or view additional information, click the Long Description button.",
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
            "title": "Direct Issue",
            "remarks": "Specifies whether you obtain the item directly from a purchase or from a storeroom. If you clear the check box (the default), you obtain the item from a storeroom and you must enter a value in the Storeroom field. When the work order is approved, Maximo reserves the item in inventory. If you select the check box, the item will be purchased for the approved work order when you use the Reorder Direct Issue Items/Services in the Inventory application. You can edit this field if the work order's status allows work plan materials edits. Work order editing rules are set up in the Organizations application.",
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
            "remarks": "Labor or craft to whom to issue the item or material.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR",
            "viewColumnName": "ISSUETO",
            "tableName": "WPITEM",
            "tableColumnName": "ISSUETO"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the item. If you enter an item that is defined as a hazardous material in Inventory, Maximo inserts hazard information on the Safety Plans tab.",
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
            "remarks": "Number of items you need for the task. If you modify this field, Maximo recalculates the Line Cost field on the Materials subtab, and the Current Estimate Material Cost on the View Costs dialog box. You can edit this field if the work order's status allows work plan material edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "ITEMQTY",
            "sameAsObject": "JOBITEM",
            "viewColumnName": "ITEMQTY",
            "tableName": "WPITEM",
            "tableColumnName": "ITEMQTY"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the set to which the planned item belongs.",
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
            "remarks": "Total cost of the item. MAXIMO calculates this using the following formula: (quantity) x (unit cost).",
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
            "remarks": "Identifies the type of material, for example, item, material, service, special order or external catalog item.",
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
            "remarks": "Storeroom location of the item. You can edit this field if the work order's status allows work plan materials edits. Work order editing rules are set up in the Organizations application.",
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
            "remarks": "Purchase requisition on which this direct issue item is ordered.",
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
            "remarks": "Line number on the purchase requisition for the item.",
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
            "title": "Requested By",
            "remarks": "Identifies the person requesting the item.",
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
            "title": "Request",
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
            "remarks": "Date you require the item. If the Direct Issue? check box is selected, you can edit this field if the work order's status allows work plan material edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": null,
            "sameAsObject": null,
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
            "remarks": "Identifies the task for the planned item or material.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WPITEM"
        },
        {
            "attributeName": "UNITCOST",
            "required": true,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Price of the item per unit at the time the work order was approved.",
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
            "remarks": "Identifies the suggested vendor for the item. If the Direct Issue? check box is selected, you can edit this field if the work order's status allows work plan material edits. Work order editing rules are set up in the Organizations application.",
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
            "remarks": "Unit cost in vendor's currency.",
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
            "remarks": "Identifies the condition of the item planned for the work.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION",
            "viewColumnName": "CONDITIONCODE",
            "tableName": "WPITEM",
            "tableColumnName": "CONDITIONCODE"
        },
        {
            "attributeName": "WPITEMID",
            "required": false,
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
            "remarks": "Rate",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "RATE",
            "tableName": "WPITEM",
            "tableColumnName": "RATE"
        },
        {
            "attributeName": "RESERVEREQ",
            "required": true,
            "persistent": false,
            "title": "Reservation Required",
            "remarks": "Reservation Required",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RATEHASCHANGED",
            "required": true,
            "persistent": true,
            "title": "Rate Changed",
            "remarks": "Flag tracks if the tool rate has been overwritten by user. If N - field will be overwritten by MAXIMO on Approval. If Y - field will not be overwritten by MAXIMO on Approval.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "RATEHASCHANGED",
            "tableName": "WPITEM",
            "tableColumnName": "RATEHASCHANGED"
        },
        {
            "attributeName": "HOURS",
            "required": true,
            "persistent": true,
            "title": "Tool Hours",
            "remarks": "Number of Hours for Which a Tool is Used",
            "sameAsAttribute": null,
            "sameAsObject": null,
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
            "required": true,
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
        "viewwhere": "linetype in (select value from synonymdomain where domainid='LINETYPE' and maxvalue in ('ITEM','MATERIAL','EXTERNAL','SPORDER'))"
    },
    "outgoingRelationships": [
        {
            "name": "COMPANY",
            "target": "COMPANIES",
            "remarks": "Relationship to the vendor table, used to find the vendor for a given work plan material. (companies.company=wpmaterial.vendor ). This resulting set will contain zero or one object.",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYSTATUS",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find inventory record for wpMaterial itewm with valid status.  (inventory.itemnum = wpmaterial.itemnum and inventory.location = wpmaterial.location and inventory.itemsetid = wpmaterial.itemsetid and inventory.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid=:itemsetid and siteid=:storelocsite and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Used to find the reservation of a wpmaterial",
            "whereClause": "requestnum=:requestnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item records for a given work plan material line (item.itemnum = wpmaterial.itemnum and item.itemsetid = wpmaterial.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid",
            "cardinality": "SINGLE"
        },
        {
            "name": "ITEMSTATUS",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the item record for wpMaterial item with valid status. (item.itemnum=wpmaterial.itemnum and item.itemsetid=wpmaterial.itemsetid and item.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMCONDITION",
            "target": "ITEMCONDITION",
            "remarks": "Relationship to the itemcondition table, used to find the itemcondition records for a given work order plan material record. (itemcondition.itemnum = wpmaterial.itemnum and itemcondition.itemsetid=wpmaterial.itemsetid and itemcondition.conditioncode=wpmaterial.conditioncode). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid=:itemsetid and conditioncode=:conditioncode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the item information records for all organizations using this item. (itemorginfo.itemnum=wpmaterial.itemnum and itemorginfo.itemsetid=wpmaterial.itemsetid) This relationship will find zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find the itemorg record for wpMaterial item with valid status. (itemorginfo.itemnum=wpmaterial.itemnum and itemorginfo.itemsetid=wpmaterial.itemsetid and itemorginfo.orgid = wpmaterial.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). This relationship will find zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find the location for a given work plan material. (type in ( 'STROEROOM','LABOR','COURIER')). This resulting set will contain zero or more objects.",
            "whereClause": "type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue in ('STOREROOM','LABOR','COURIER')) and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find the location for a given work plan material. (location in ( select location from inventory where inventory.itemnum=wpmaterial.itemnum  and locations.itemsetid = wpmaterial.itemsetid)). This resulting set will contain zero or more objects.",
            "whereClause": "location in ( select location from inventory where inventory.itemnum=:itemnum and inventory.itemsetid = :itemsetid) and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the matusetrans for a given work plan material. This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and storeloc!=:location and itemnum=:itemnum and itemsetid = :itemsetid and tositeid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DIMATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the matusetrans for a given work plan material. This resulting set will contain only items that are direct request.",
            "whereClause": "refwo=:wonum and itemnum=:itemnum and itemsetid = :itemsetid and tositeid=:siteid and 1=:directreq",
            "cardinality": null
        },
        {
            "name": "POREV",
            "target": "PO",
            "remarks": "Relationship to find the PO from a planned material in a workorder",
            "whereClause": "ponum in (select prline.ponum from prline where prnum=:pr and prlinenum=:prlinenum and prline.siteid=:siteid and prline.ponum=po.ponum and prline.siteid=po.siteid and status in ( select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('WAPPR','APPR','INPRG','CLOSE','HOLD'))) and siteid=:siteid  ",
            "cardinality": null
        },
        {
            "name": "POLINE",
            "target": "POLINE",
            "remarks": "Relationship to find the POLINE from a planned material in a workorder.",
            "whereClause": "ponum in (select prline.ponum from prline, po where prnum=:pr and prlinenum=:prlinenum and prline.siteid=:siteid and po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.siteid=poline.siteid and status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('WAPPR','APPR','INPRG','CLOSE','HOLD'))) and polinenum in (select prline.polinenum from prline, po where prnum=:pr and prlinenum=:prlinenum and prline.siteid=:siteid and po.ponum=poline.ponum and po.revisionnum=poline.revisionnum and po.siteid=poline.siteid and status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('WAPPR','APPR','INPRG','CLOSE','HOLD'))) and siteid=:siteid ",
            "cardinality": null
        },
        {
            "name": "PRLINE",
            "target": "PRLINE",
            "remarks": "Relationship to find the prline from a planned material on a work order",
            "whereClause": "prnum=:pr and prlinenum=:prlinenum and siteid=:siteid",
            "cardinality": null
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
            "remarks": "Relationship from wpmaterial to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WPMATERIAL",
            "source": "WORKORDER",
            "remarks": "Relationship to the WPMaterial view, used to find all work plan materials for a work order. (WPMaterial.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPMATERIAL_QBE",
            "source": "WORKORDER",
            "remarks": "Relationship from workorder to wpmaterial for qbe ",
            "whereClause": "exists (select 1 from workorder yy where ((yy.istask = :yes and yy.parent = :wonum ) or (yy.wonum = :wonum)) and wpmaterial.wonum = yy.wonum and yy.siteid = :siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPMATERIALTASK",
            "source": "WORKORDER",
            "remarks": "Relationship to the WPMaterial view, used to find all work plan materials for a work order. (WPMaterial.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid)",
            "cardinality": null
        },
        {
            "name": "WPMDIRECTREQ",
            "source": "WORKORDER",
            "remarks": "Relationship to the WPMaterial view, used to find all direct request work plan materials for a work order. This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid and directreq=:yes and pr is null and prlinenum is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKPACKMATERIALS",
            "source": "WORKORDER",
            "remarks": "Relationship to find all WPMaterial in a work package (Current work order and all related children)",
            "whereClause": "wonum in (select wonum from workorder where wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "REP_PLANMAT",
            "source": "WORKORDER",
            "remarks": "Relationship that returns all planned materials for given Work Order, including the materials for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(wonum=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and wpmaterial.siteid=w.siteid and wpmaterial.wonum=w.wonum)) and wpmaterial.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWPLANMATERIAL",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowPlanMetrial Set used by UI for display. This is a special MboSet used for displaying the planned material for a given workorder. (wonum in (select wonum from workorder where wpmaterial.wonum=workorder.wonum or wpmaterial.parent=workorder.wonum and wpmaterial.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPLANMATERIAL",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowAllPlanMaterialSet used by UI for display. This is a special MboSet used for displaying all work plan material related to the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLSTOREWPMATERIAL",
            "source": "WORKORDER",
            "remarks": "Relationship to find all the planned materials that are not direct issues.",
            "whereClause": "wonum=:wonum and siteid=:siteid and directreq=:no",
            "cardinality": null
        },
        {
            "name": "ALLDIRECTREQMATERIAL",
            "source": "WORKORDER",
            "remarks": "Relationship to show all plan material that is a direct issue.",
            "whereClause": "wonum=:wonum and siteid=:siteid and directreq=:yes",
            "cardinality": null
        }
    ]
}