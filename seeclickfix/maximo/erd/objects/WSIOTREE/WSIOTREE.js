mos = {
    "objectName": "WSIOTREE",
    "className": "com.ibm.tivoli.maximo.interaction.app.createint.WSIOTreeSet",
    "description": "WSIO Tree Structure",
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
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "WSIOTREEID",
            "required": true,
            "persistent": false,
            "title": "WSIO Tree ID",
            "remarks": "WSIO Tree ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Has Children",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has Parent",
            "remarks": "Has Parent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "Title",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": false,
            "title": "Required",
            "remarks": "Required",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": false,
            "title": "Default Value",
            "remarks": "Default Value",
            "sameAsAttribute": "DEFAULTVALUE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ELEMENTPATH",
            "required": false,
            "persistent": false,
            "title": "Element Path",
            "remarks": "Element Path",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MARKEDFORDELETE",
            "required": true,
            "persistent": false,
            "title": "Marked For Delete",
            "remarks": "Marked For Delete",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TREENODE",
            "target": "WSIOTREE",
            "remarks": "Relationship to a child node",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RESPONSEWSIO",
            "source": "INTGENERATOR",
            "remarks": "Relationship to build response WSIO Tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RESPONSEWSIOOPT",
            "source": "INTGENERATOR",
            "remarks": "Relationship to build optimized responseWSIO Tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "REQUESTWSIO",
            "source": "INTGENERATOR",
            "remarks": "Relation to build Request WSIO Tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "REQUESTWSIOOPT",
            "source": "INTGENERATOR",
            "remarks": "Relationship to build optimized request WSIO Tree",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RESPMAPATTR",
            "source": "INTGENERATOR",
            "remarks": "Show all attributes for response",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "TREENODE",
            "source": "WSIOTREE",
            "remarks": "Relationship to a child node",
            "whereClause": null,
            "cardinality": null
        }
    ]
}