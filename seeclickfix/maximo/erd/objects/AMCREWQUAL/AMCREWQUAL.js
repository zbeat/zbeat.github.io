mos = {
    "objectName": "AMCREWQUAL",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCrewQualSet",
    "description": "Crew Required Qualifications",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWQUALID",
    "primaryKeyColumns": [
        "ORGID",
        "AMCREW",
        "POSITION",
        "QUALIFICATIONID",
        "TOOL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWQUAL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Qualifications",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "AMCREWQUAL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWQUAL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "AMCREWQUAL",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Qualification",
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
            "attributeName": "QUALIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Qualification",
            "remarks": "Identifies a required qualification for the crew. If the qualification is position-specific, enter the appropriate role in the Position field. The Quantity field becomes read-only. If any member of the crew can have the qualification (not position-specific), enter a value in the Quantity field (1 or greater) and leave the Position field empty.",
            "sameAsAttribute": "QUALIFICATIONID",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "POSITION",
            "required": false,
            "persistent": true,
            "title": "Position",
            "remarks": "Identifies the postion on the crew that must hold the required qualification.",
            "sameAsAttribute": "POSITION",
            "sameAsObject": "AMCTCRAFT"
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
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Number of crew members who must hold the qualification. The quantity must not exceed the number of positions on the crew. If the qualification references a position or tool, this field is read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Remarks or comments about the required qualification. To enter or view additional  information, click Long Description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREMENTSTATUS",
            "required": false,
            "persistent": false,
            "title": "Requirement Status",
            "remarks": "Indicates whether the qualification requirement is met. If the value is Not Qualified, the position-specific qualification or the necessary quantity of the qualification on the crew is not met. If the value is OK, the requirement is met.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREWQUALID",
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
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship between AMCREWQUAL and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "LABORQUAL",
            "target": "LABORQUAL",
            "remarks": "Relationship between AMCREWQUAL and active LABORQUAL.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid and status in (select value from synonymdomain where domainid = 'QUALSTAT' and maxvalue in ('ACTIVE'))",
            "cardinality": null
        },
        {
            "name": "QUALCRAFTSKILL",
            "target": "QUALCRAFTSKILL",
            "remarks": "Relationship between AMCREWQUAL and QUALCRAFTSKILL tables.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "QUALIFICATION",
            "target": "QUALIFICATION",
            "remarks": "Relationship between AMCREWQUAL and QUALIFICATION tables.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWQUAL",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWQUAL tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWQUALCREWDATE",
            "source": "AMCREW",
            "remarks": "Finds the qualifications for the given amcrew. This relationship will then be used to find the assigned qualifications for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWQUAL",
            "source": "QUALIFICATION",
            "remarks": "Relationship between QUALIFICATION and AMCREWQUAL tables.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid",
            "cardinality": null
        }
    ]
}