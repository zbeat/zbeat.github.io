mos = {
    "objectName": "WPITEM",
    "className": "psdi.app.workorder.WPItemSet",
    "description": "Base table for WPMaterial and WPServices view",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WPITEMID",
    "primaryKeyColumns": [
        "WPITEMID"
    ],
    "logicalRelationships": [
        {
            "objectName": "WPITEM",
            "targetObject": "REORDERPAD",
            "parentKeys": "WPITEMID",
            "targetKeys": "WPITEMID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
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
        },
        {
            "objectName": "WPITEM",
            "targetObject": "WPSERVICE",
            "parentKeys": "WPITEMID",
            "targetKeys": "WPITEMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Item",
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
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "WPITEM",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "WPITEM",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPITEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Work Plan Item",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "WPITEM",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Work Plan Item",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "SITEID, REQUESTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Reservations",
            "longDescription": null
        },
        {
            "objectName": "INVRESERVE",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, REQUESTNUM",
            "targetKeys": "STORELOCSITE, REQUESTNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "WPITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ITEMCONDITION",
            "targetObject": "WPITEM",
            "parentKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "targetKeys": "ITEMNUM, CONDITIONCODE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Condition",
            "longDescription": null
        },
        {
            "objectName": "JOBLABOR",
            "targetObject": "WPITEM",
            "parentKeys": "JOBLABORID",
            "targetKeys": "WPLABORREF",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Labor",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WPITEM",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, ISSUETO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issued To",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "WPITEM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom Location",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPITEM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, SITEID, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 243",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPITEM",
            "parentKeys": "MEASUREUNITID, SITEID, ORGID",
            "targetKeys": "ORDERUNIT, STORELOCSITE, ORGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 244",
            "longDescription": null
        },
        {
            "objectName": "MEASUREUNIT",
            "targetObject": "WPITEM",
            "parentKeys": "MEASUREUNITID",
            "targetKeys": "ORDERUNIT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Unit",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WPITEM",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WPITEM",
            "parentKeys": "PERSONID",
            "targetKeys": "REQUESTBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Requested By",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "SITEID, PR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Item ordered on this PR",
            "longDescription": null
        },
        {
            "objectName": "PR",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, PRNUM",
            "targetKeys": "STORELOCSITE, PR",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "WPITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 69",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID",
            "targetKeys": "STORELOCSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 316",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Items",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "STORELOCSITE, WONUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 112",
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
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description for the item",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
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
            "title": "Direct Request ",
            "remarks": "This is to signify if the item on this reservation will be ordered outside of standard in",
            "sameAsAttribute": "DIRECTREQ",
            "sameAsObject": "INVRESERVE"
        },
        {
            "attributeName": "DISPLAYTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Task",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Issue to a Laborcode or Craft",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Item Number Referring to Inventory Table",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMQTY",
            "required": false,
            "persistent": true,
            "title": "Item Quantity",
            "remarks": "Item Quantity Required For a Work Plan Operation",
            "sameAsAttribute": "ITEMQTY",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Linecost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": true,
            "title": "Line Type",
            "remarks": "Line type. The value of line type could be Item, Material, Service, Special Order or External Catalog Item.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Storeroom",
            "remarks": "Primary or Alternate Location From Inventory",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the item",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model",
            "remarks": "Model number for the item or manufacturer part number",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Order unit for the item",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PR",
            "required": false,
            "persistent": true,
            "title": "PR",
            "remarks": "Number identifying Prline of PR for direct issue.",
            "sameAsAttribute": "PRNUM",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "PRLINENUM",
            "required": false,
            "persistent": true,
            "title": "PR Line",
            "remarks": "Number identifying Prline of PR for direct issue.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "REQUESTBY",
            "required": false,
            "persistent": true,
            "title": "Requested by",
            "remarks": "Person requesting item.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "REQUESTNUM",
            "required": false,
            "persistent": true,
            "title": "Request",
            "remarks": "Link to InvReserve",
            "sameAsAttribute": "REQUESTNUM",
            "sameAsObject": "INVRESERVE"
        },
        {
            "attributeName": "REQUIREDATE",
            "required": false,
            "persistent": true,
            "title": "Required Date",
            "remarks": "Date item is needed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Task",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": true,
            "title": "Unit Cost",
            "remarks": "Item Unit Cost when work order was approved",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNITCOSTHASCHANGED",
            "required": true,
            "persistent": true,
            "title": "Unit Cost Changed ",
            "remarks": "Flag tracks if the unit cost has been overwritten by user. If N - field will be overwritten by MAXIMO on Approval. If Y - field will not be overwritten by MAXIMO on Approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Suggested vendor to order item from.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "VENDORPACKCODE",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Code",
            "remarks": "Vendor pack code for the item",
            "sameAsAttribute": "VENDORPACKCODE",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "VENDORPACKQUANTITY",
            "required": false,
            "persistent": true,
            "title": "Vendor Pack Quantity",
            "remarks": "Vendor pack quantity for the item",
            "sameAsAttribute": "VENDORPACKQUANTITY",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "VENDORUNITCOST",
            "required": false,
            "persistent": true,
            "title": "Vendor Unit Cost",
            "remarks": "Unit cost in vendor currency",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "WPITEM"
        },
        {
            "attributeName": "VENDORWAREHOUSE",
            "required": false,
            "persistent": true,
            "title": "Vendor Warehouse",
            "remarks": "Vendor warehouse for the item",
            "sameAsAttribute": "VENDORWAREHOUSE",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Plan Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WPM1",
            "required": false,
            "persistent": true,
            "title": "Wpm1",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM1",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "WPM2",
            "required": false,
            "persistent": true,
            "title": "Wpm2",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM2",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "WPM3",
            "required": false,
            "persistent": true,
            "title": "Wpm3",
            "remarks": "Extra filed",
            "sameAsAttribute": "JM3",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "WPM4",
            "required": false,
            "persistent": true,
            "title": "Wpm4",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM4",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "WPM5",
            "required": false,
            "persistent": true,
            "title": "Wpm4",
            "remarks": "Extra field",
            "sameAsAttribute": "JM5",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "WPM6",
            "required": false,
            "persistent": true,
            "title": "Wpm6",
            "remarks": "Extra Field",
            "sameAsAttribute": "JM6",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "The condition of the item planned for a given work order",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "WPITEMID",
            "required": true,
            "persistent": true,
            "title": "WPITEMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STORELOCSITE",
            "required": false,
            "persistent": true,
            "title": "Storeroom Site",
            "remarks": "Specifies the Storeroom's Site of an item",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "RATE",
            "required": true,
            "persistent": true,
            "title": "Rate",
            "remarks": "Rate",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsObject": null
        },
        {
            "attributeName": "HOURS",
            "required": true,
            "persistent": true,
            "title": "Tool Hours",
            "remarks": "Number of Hours for Which a Tool is Used",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MKTPLCITEM",
            "required": true,
            "persistent": true,
            "title": "Marketplace Item",
            "remarks": "Flag to determine the items from the marketplace.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESTYPE",
            "required": false,
            "persistent": true,
            "title": "Reservation Type",
            "remarks": "Specify the type of reservation depending on whether it is a firm request for material or not (hard or soft). The reservation type may also be set to automatic, in which case the reservation type (APHARD or APSOFT) is generated depending on the urgency of the order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "The type of crew that should perform the work.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "WPLABORREF",
            "required": false,
            "persistent": true,
            "title": "Crew Reference",
            "remarks": "This field identifies tool records to the associated joblabor record.",
            "sameAsAttribute": "JOBLABORID",
            "sameAsObject": "JOBLABOR"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find the inventory for a given work plan material. (inventory.itemnum=wpitem.itemnum and inventory.location=wpitem.location and inventory.itemsetid = wpitem.itemsetid nd inventory.siteid = wpitem.storelocsite). This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and location=:location and itemsetid = :itemsetid and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORYLOC",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find whether the item exist in any storeroom. This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVITEMLOC",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to find whether the item exist in any storeroom. This resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SKDINVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Get invreserve record for wpitem record,return 0 or 1 record.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and requestnum=:requestnum",
            "cardinality": null
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship from wpitem to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WPITEM",
            "source": "INVENTORY",
            "remarks": "Relationship to the WPITEM table, used to find all work plan Item(material and services) for a itemnum. (WPitem.itemnum = item.itemnum and WPitem.itemsetid = item.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPITEM",
            "source": "ITEM",
            "remarks": "Relationship to the WPITEM table, used to find all work plan Item(material and services) for a itemnum. (WPitem.itemnum = item.itemnum and WPitem.itemsetid = item.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPITEM",
            "source": "ITEMORGINFO",
            "remarks": "Relationship to the WPITEM table, used to find all work plan Item(material and services) for a itemnum. (WPitem.itemnum = item.itemnum and WPitem.itemsetid = item.itemsetid). This resulting set will contain zero or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPITEM",
            "source": "MEASUREUNIT",
            "remarks": "Relationship to the wpitem table, used to find all wpitem records using this measureunit. (wpitem.orderunit=measureunit.measureunitid) This relationship will find zero or more objects.",
            "whereClause": "orderunit=:measureunitid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPITEM",
            "source": "WORKORDER",
            "remarks": "Relationship to the WPITEM table, used to find all work plan Item(material and services) for a work order. (WPitem.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWPLANITEM",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowPlanItem Set used by UI for display. This is a special MboSet used for displaying the planned item(material and services) for a given workorder. (wonum in (select wonum from workorder where wpitem.wonum=workorder.wonum or wpitem.parent=workorder.wonum and wpitem.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPLANITEM",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowAllPlanItemSet used by UI for display. This is a special MboSet used for displaying all work plan Item(material/services) related to the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)",
            "cardinality": "UNDEFINED"
        }
    ]
}