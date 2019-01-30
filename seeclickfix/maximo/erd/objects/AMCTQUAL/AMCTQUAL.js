mos = {
    "objectName": "AMCTQUAL",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCTQualificationSet",
    "description": "Crew Template qualification table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCTQUALID",
    "primaryKeyColumns": [
        "AMCREWTYPE",
        "ORGID",
        "POSITION",
        "QUALIFICATIONID",
        "TOOL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREWT",
            "targetObject": "AMCTQUAL",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Crew Type Qualifications",
            "longDescription": null
        },
        {
            "objectName": "AMCTCRAFT",
            "targetObject": "AMCTQUAL",
            "parentKeys": "AMCREWTYPE, ORGID, POSITION",
            "targetKeys": "AMCREWTYPE, ORGID, POSITION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Qualifications",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "AMCTQUAL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCTQUAL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "AMCTQUAL",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
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
            "attributeName": "QUALIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Qualification",
            "remarks": "Identifies a required qualification for the crew type.",
            "sameAsAttribute": "QUALIFICATIONID",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "POSITION",
            "required": false,
            "persistent": true,
            "title": "Position",
            "remarks": "Position on the crew that must hold the specified qualification. If this field is  empty, the qualification is not position-specific.",
            "sameAsAttribute": "POSITION",
            "sameAsObject": "AMCTCRAFT"
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Number of crew members who must hold the qualification. If the qualification  references a position or tool, this field will be empty.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Note or comment about the required qualification.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOL",
            "required": true,
            "persistent": true,
            "title": "Tool",
            "remarks": "Specifies whether the required qualification is for a tool or not. If the check box is selected, the qualification is for a tool. If the check box is cleared, the qualification is not for a tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCTQUALID",
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
            "attributeName": "TOOL_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Tool Long description",
            "remarks": "Long Description for Tool",
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
            "name": "AMCREWT",
            "target": "AMCREWT",
            "remarks": "Relationship between AMCTQUAL and AMCREWT tables.",
            "whereClause": "amcrewtype = :amcrewtype and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship to the CraftSkill table.",
            "whereClause": "craft = :craft and orgid = :orgid and (skilllevel = :skilllevel or (:skilllevel is null and skilllevel is null))",
            "cardinality": null
        },
        {
            "name": "QUALCRAFTSKILL",
            "target": "QUALCRAFTSKILL",
            "remarks": "Relationship to the QualCraftSkill table.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "QUALIFICATION",
            "target": "QUALIFICATION",
            "remarks": "Qualification entry for corresponding ANCTQUAL.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "TOOLQUAL",
            "target": "TOOLQUAL",
            "remarks": "Relationship to the TOOLQUAL table.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCTQUAL",
            "source": "AMCREWT",
            "remarks": "Required qualifications for crew template.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCTQUAL",
            "source": "AMCTCRAFT",
            "remarks": "Relationship to associate Qualifications with crew on Crew Type App.",
            "whereClause": "crewtype=:crewtype and orgid=:orgid and position=:position",
            "cardinality": null
        },
        {
            "name": "AMCTQUAL",
            "source": "AMCTTOOL",
            "remarks": "Relationship to the AMCTToolQual table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid and position=:position",
            "cardinality": null
        },
        {
            "name": "AMCTQUAL",
            "source": "QUALIFICATION",
            "remarks": "Relationship between QUALIFICATION and AMCTQUAL tables.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid",
            "cardinality": null
        }
    ]
}