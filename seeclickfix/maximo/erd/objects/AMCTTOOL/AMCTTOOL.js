mos = {
    "objectName": "AMCTTOOL",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCTToolSet",
    "description": "Crew Template tool table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCTTOOLID",
    "primaryKeyColumns": [
        "AMCREWTYPE",
        "ORGID",
        "TOOLSEQ"
    ],
    "logicalRelationships": [
        {
            "objectName": "AMCTTOOL",
            "targetObject": "AMCTTOOL",
            "parentKeys": "AMCREWTYPE, ORGID, TOOLSEQ",
            "targetKeys": "AMCREWTYPE, ORGID, RESOURCEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREWT",
            "targetObject": "AMCTTOOL",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Tools",
            "longDescription": null
        },
        {
            "objectName": "AMCTTOOL",
            "targetObject": "AMCTTOOL",
            "parentKeys": "AMCREWTYPE, ORGID, TOOLSEQ",
            "targetKeys": "AMCREWTYPE, ORGID, RESOURCEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "AMCTTOOL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Tool",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "AMCTTOOL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCTTOOL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "AMCTTOOL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "Identifies the type of work the crew is designed to perform.This value must be unique for all crew type records within an organization.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization to which the crew type belongs.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Tool",
            "remarks": "The item associated with the Resource I.D. For example, if the resource is a  vehicle, the item or tool might be a forklift or a bucket truck.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item Set",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Note or comment about the required tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLSEQ",
            "required": true,
            "persistent": true,
            "title": "Tool Seq",
            "remarks": "Identifies the generic title of a required tool for the crew. The resource identifier must be unique within the crew in an organization. For example, if two vehicles are needed for a crew the generic titles might be vehicle1 and vehicle2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCEID",
            "required": false,
            "persistent": true,
            "title": "Resource ID",
            "remarks": "Identifies the generic title of a tool for the crew type. The resource identifier  must be unique within the crew in an organization.",
            "sameAsAttribute": "TOOLSEQ",
            "sameAsObject": "AMCTTOOL"
        },
        {
            "attributeName": "AMCTTOOLID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
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
            "attributeName": "REMARKS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remarks Long description",
            "remarks": "Long Description for Remarks",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCTQUAL",
            "target": "AMCTQUAL",
            "remarks": "Relationship to the AMCTToolQual table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid and position=:position",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Item entry for corresponding AMCTTOOL.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": "get itemorginfo record for AMCTTOOL.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "TOOLQUAL",
            "target": "TOOLQUAL",
            "remarks": "Relationship to the ToolQual table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCTTOOL",
            "source": "AMCREWT",
            "remarks": "Required tools for crew template.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCTTOOL",
            "source": "JOBLABOR",
            "remarks": "Relationship to the Crew Type Tools table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCTTOOL",
            "source": "WPLABOR",
            "remarks": "Relationship to the Crew Type Tools table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        }
    ]
}