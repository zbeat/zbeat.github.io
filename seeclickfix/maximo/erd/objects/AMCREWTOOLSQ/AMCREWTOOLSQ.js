mos = {
    "objectName": "AMCREWTOOLSQ",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCrewToolSqSet",
    "description": "Crew Tool Sequence",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWTOOLSQID",
    "primaryKeyColumns": [
        "ORGID",
        "AMCREW",
        "TOOLSEQ"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWTOOLSQ",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tools",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "AMCREWTOOLSQ",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tools used by Crew",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "AMCREWTOOLSQ",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWTOOLSQ",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "AMCREWTOOLSQ",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Item Set",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AMCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Crew Id",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TOOLSEQ",
            "required": true,
            "persistent": true,
            "title": "Tool Sequence",
            "remarks": "Identifies the generic title of a required tool for the crew. The resource identifier must be unique within the crew in an organization. For example, if two  vehicles are needed for a crew the generic titles might be vehicle1 and vehicle2.",
            "sameAsAttribute": "TOOLSEQ",
            "sameAsObject": "AMCTTOOL"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Tool",
            "remarks": "Identifies the item associated with the required tool sequence. For example, if the tool sequence is a vehicle, the item or tool might be a forklift or a bucket truck.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item Set Id",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Remarks or comments about the required tool. To enter or view additional information, click Long Description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREWTOOLSQID",
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
        },
        {
            "attributeName": "REQUIREMENTSTATUS",
            "required": false,
            "persistent": false,
            "title": "Requirement Status",
            "remarks": "Indicates if there is an asset with the required tool number assigned to the crew. If the value in the field is OK, there is an asset with that tool number assigned to the position. If the value is Not Assigned, there is no labor assigned to fulfill the requirement. If  the value is Not Available, the asset is assigned to other work and is unavailable to the crew on that date. If the value is Requirement Not Met, an assigned asset that does not match the tool requirement. If the value is Multiple, there are multiple assets assigned to the tool sequence at the same time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREWTOOL",
            "target": "AMCREWTOOL",
            "remarks": "Relationship between AMCREWTOOLSQ and AMCREWTOOL tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and toolseq = :toolseq",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLMAXDATE",
            "target": "AMCREWTOOL",
            "remarks": "Relationship between AMCREWTOOLSQ and AMCREWTOOL tables having max(EFFECTIVEDATE).",
            "whereClause": "orgid = :orgid and amcrew = :amcrew and toolseq = :toolseq and (enddate is null and effectivedate = (select max(effectivedate) from  amcrewtool where amcrew = :amcrew and orgid = :orgid and toolseq = :toolseq))",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship between AMCREWTOOLSQ and ITEM tables.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "TOOLQUAL",
            "target": "TOOLQUAL",
            "remarks": "Relationship between AMCREWTOOLSQ and TOOLQUAL tables.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "TOOLTRANS",
            "target": "TOOLTRANS",
            "remarks": "Relationship between AMCREWTOOLSQ and TOOLTRANS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and toolsq = :toolseq",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWTOOLSQ",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWTOOLSQ tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWTOOLSQCREWDATE",
            "source": "AMCREW",
            "remarks": "Finds the tools for the given amcrew. This relationship will then be used to find the assigned tools for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLSQ",
            "source": "AMCREWTOOL",
            "remarks": "Relationship between AMCREWTOOL and AMCREWTOOLSQ tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and toolseq = :toolseq",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLSQ",
            "source": "AMCREWWOTL",
            "remarks": "Relationship from table AMCREWWOTL to AMCREWTOOLSQ.",
            "whereClause": "amcrew=:amcrew and toolseq=:toolseq",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLSQ",
            "source": "JOBLABOR",
            "remarks": "Relationship to the AMCREWTOOLSQ table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLSQ",
            "source": "WPLABOR",
            "remarks": "Relationship to the AMCREWTOOLSQ table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        }
    ]
}