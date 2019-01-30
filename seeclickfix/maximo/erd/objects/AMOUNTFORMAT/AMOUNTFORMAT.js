mos = {
    "objectName": "AMOUNTFORMAT",
    "className": "psdi.app.configure.virtual.AmountFormatSet",
    "description": "Amount Format object to configure AMOUNT maxtype",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "LENGTH",
            "required": true,
            "persistent": false,
            "title": "Amount Length",
            "remarks": "The maximum number of characters that can be input.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCALE",
            "required": true,
            "persistent": false,
            "title": "Amount Scale",
            "remarks": "The scale of the field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTEGERLENGTH",
            "required": true,
            "persistent": false,
            "title": "Integer Length",
            "remarks": "Length of INTEGER maxtype attributes",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SMALLINTLENGTH",
            "required": true,
            "persistent": false,
            "title": "Small Integer Length",
            "remarks": "Length of SMALLINT maxtype attributes",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "AMOUNTFORMAT",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship to AmountFormat table.  Non-persistent MboSet (1=1). The result set will contain zero entries (a Mbo must be added to process).",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}