mos = {
    "objectName": "ACTIVATEGLACCOUNT",
    "className": "psdi.app.financial.virtual.ActivateGLAccountSet",
    "description": "Non-persistent table for Activate GL Components page.",
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
            "attributeName": "GLCOMPONENTSID",
            "required": true,
            "persistent": false,
            "title": "GL Components ID",
            "remarks": "Unique Identifier of GLCOMPONENTS",
            "sameAsAttribute": "GLCOMPONENTSID",
            "sameAsObject": "GLCOMPONENTS"
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": false,
            "title": "Value",
            "remarks": "GL Component value.",
            "sameAsAttribute": "COMPVALUE",
            "sameAsObject": "GLCOMPONENTS"
        },
        {
            "attributeName": "GLORDER",
            "required": true,
            "persistent": false,
            "title": "GL Order",
            "remarks": "Order of this component in GL Account.",
            "sameAsAttribute": "GLORDER",
            "sameAsObject": "GLCONFIGURE"
        },
        {
            "attributeName": "ACTIVATE",
            "required": true,
            "persistent": false,
            "title": "Activate Accounts",
            "remarks": "Activate Accounts",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "GLCONFIGURE",
            "target": "GLCONFIGURE",
            "remarks": "Relationship to GLConfigure table (glconfigure.glorder=issuecurrentitem.glorder).  The result set will contain one row in the GLConfigure table.",
            "whereClause": "glorder=:glorder",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACTIVATEGLACCOUNT",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the non-persistent ACTIVATEGLACCOUNT table, used to get an empty set so that assets can be select for the issue or return. (1=0). The resulting set will contain zero objects.",
            "whereClause": "1=0",
            "cardinality": null
        }
    ]
}