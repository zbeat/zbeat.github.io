mos = {
    "objectName": "ASCHANGESTATUS",
    "className": "psdi.app.asset.virtual.AsChangeStatusSet",
    "description": "Non-persistent table for asse change status dialog",
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "Change to Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ROLLTOALLCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Roll New Status to All Child Assets",
            "remarks": "Roll New Status Down to all Child Assets",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVEFROMACTIVEROUTES",
            "required": true,
            "persistent": false,
            "title": "Remove Asset Reference from Active Routes",
            "remarks": "Remove Asset Reference from Active Routes",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVEFROMACTIVESP",
            "required": true,
            "persistent": false,
            "title": "Remove Asset Reference from Active Safety Plans",
            "remarks": "Remove Asset Reference from Active Sefaty Plans",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEPMSTATUS",
            "required": true,
            "persistent": false,
            "title": "Change the Status of All Associated PMs to Inactive",
            "remarks": "Change the Status of All Associated PMs to Inactive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCMEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "A description of why the status was changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": false,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCMEMO_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Memo Long description",
            "remarks": "Long Description for Memo",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASCHANGESTATUS",
            "source": "ASSET",
            "remarks": "Relationship to the non-persistent AssetChangeStatus table. The resulting set will contain zero or more objects. Note : AssetChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}