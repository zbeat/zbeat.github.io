mos = {
    "objectName": "AGREEMENTINPUT",
    "className": "psdi.app.po.virtual.AgreementInputSet",
    "description": "Non persistent table to show the agreement details",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "The Vendor for the Agreement.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": false,
            "title": "Manufacturer",
            "remarks": "Manufacturer code.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": false,
            "title": "Model",
            "remarks": "Vendor Model Number.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CATALOGCODE",
            "required": false,
            "persistent": false,
            "title": "Catalog #",
            "remarks": "Catalog Code.",
            "sameAsAttribute": "CATALOGCODE",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Order Qty.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": false,
            "title": "Order Unit",
            "remarks": "Order Unit.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "UNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Order Unit Cost.",
            "sameAsAttribute": "UNITCOST",
            "sameAsObject": "POLINE"
        },
        {
            "attributeName": "CONTRACTREFNUM",
            "required": false,
            "persistent": false,
            "title": "Contract Reference",
            "remarks": "Contract Reference Number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": false,
            "persistent": false,
            "title": "Contract Reference Type",
            "remarks": "Contract Reference Type",
            "sameAsAttribute": "CONTRACTTYPE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description For Line Item",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "GL Debot Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "Line Cost",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": false,
            "title": "Contract Reference Revision",
            "remarks": "Contract Reference Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTLINEID",
            "required": false,
            "persistent": false,
            "title": "Contract Line ID",
            "remarks": "Unique identifier of the Contract Line",
            "sameAsAttribute": "CONTRACTLINEID",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "LEADTIME",
            "required": false,
            "persistent": false,
            "title": "Delivery Time",
            "remarks": "Delivery Time",
            "sameAsAttribute": "DELIVERYTIME",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": false,
            "title": "Commodity Group",
            "remarks": "Commodity Group",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": false,
            "title": "Commodity",
            "remarks": "Commodity",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "Condition code.",
            "remarks": "Condition Code",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": false,
            "title": "Indicates whether inspection of item is required upon receipt.",
            "remarks": "Inspection Required",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "ITEM"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "AGREEMENTINPUT",
            "source": "POLINE",
            "remarks": "Relationship to the non-persistent AgreementInput table. Populates with  valid price agreements for the item vendor combination. If there is no vendor on the PO Header this non-persistent MboSet populates with all price agreements that exist for the item irrespective of the vendor.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AGREEMENTINPUT",
            "source": "PRLINE",
            "remarks": "Relationship to the non-persistent AgreementInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used for find valid agreements for an item.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}