mos = {
    "objectName": "AMCTCRAFT",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCTCraftSet",
    "description": "Crew Template Craft Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCTCRAFTID",
    "primaryKeyColumns": [
        "AMCREWTYPE",
        "ORGID",
        "POSITION"
    ],
    "logicalRelationships": [
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
            "objectName": "AMCTCRAFT",
            "targetObject": "LABTRANS",
            "parentKeys": "AMCREWTYPE, ORGID, POSITION",
            "targetKeys": "AMCREWTYPE, ORGID, POSITION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Labor Transactions",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREWT",
            "targetObject": "AMCTCRAFT",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Craft",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCTCRAFT",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Crew Template Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "AMCTCRAFT",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "AMCTCRAFT",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Skill",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "AMCTCRAFT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCTCRAFT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 16",
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
            "attributeName": "CRAFT",
            "required": true,
            "persistent": true,
            "title": "Craft",
            "remarks": "Individual craft that is associated with a position on a crew.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "Required skill level of the selected craft.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Comments about the required craft. To enter or view additional information, click Long Description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POSITION",
            "required": true,
            "persistent": true,
            "title": "Position",
            "remarks": "The specific role on the crew for a labor resource. The position identifier must be unique within the crew in an organization.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Identifies the vendor supplying the outside labor, if any.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Labor Contract",
            "remarks": "Identifies the vendor's contract number for the craft.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "AMCTCRAFTID",
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
            "attributeName": "CRAFT_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Craft Long description",
            "remarks": "Long Description for Craft",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKILLLEVEL_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Skill Level Long description",
            "remarks": "Long Description for Skill Level",
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
            "attributeName": "VENDOR_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Vendor Long description",
            "remarks": "Long Description for Vendor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Labor Contract Long description",
            "remarks": "Long Description for Labor Contract",
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
            "remarks": "Relationship between AMCTCRAFT and AMCREWT tables.",
            "whereClause": "amcrewtype = :amcrewtype and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCTQUAL",
            "target": "AMCTQUAL",
            "remarks": "Relationship to associate Qualifications with crew on Crew Type App.",
            "whereClause": "crewtype=:crewtype and orgid=:orgid and position=:position",
            "cardinality": null
        },
        {
            "name": "CRAFTRATE",
            "target": "CRAFTRATE",
            "remarks": "Relationship to get rate for crafts.",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship from AMCTCRAFT to the CRAFTSKILL table.",
            "whereClause": "craft = :craft and orgid=:orgid and ((:skilllevel is null and skilllevel is null) or (:skilllevel is not null and skilllevel=:skilllevel))",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCTCRAFT",
            "source": "AMCREWT",
            "remarks": "Required crafts for crew template.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCTCRAFT",
            "source": "CRAFT",
            "remarks": "Relationship between CRAFT and AMCTCRAFT tables.",
            "whereClause": "craft = :craft and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCTCRAFT",
            "source": "JOBLABOR",
            "remarks": "Relationship to the Crew Type Crafts table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCTCRAFT",
            "source": "WPLABOR",
            "remarks": "Relationship to the Crew Type Crafts table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        }
    ]
}