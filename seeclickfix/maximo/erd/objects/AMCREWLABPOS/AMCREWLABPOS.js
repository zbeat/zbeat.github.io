mos = {
    "objectName": "AMCREWLABPOS",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCrewLabPosSet",
    "description": "Crew Labor Position",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWLABPOSID",
    "primaryKeyColumns": [
        "ORGID",
        "AMCREW",
        "POSITION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWLABPOS",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Labor Positions",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCREWLABPOS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Crew Labor Position",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "AMCREWLABPOS",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "AMCREWLABPOS",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "AMCREWLABPOS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWLABPOS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 6",
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
            "attributeName": "POSITION",
            "required": true,
            "persistent": true,
            "title": "Position",
            "remarks": "Identifies the specific role on the crew for the labor resource. The position  identifier must be unique within the crew in an organization. If you delete the position and it has any qualifications associated with it, Maximo deletes those qualifications.",
            "sameAsAttribute": "POSITION",
            "sameAsObject": "AMCTCRAFT"
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
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Identifies the vendor supplying the outside labor, if any.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
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
            "attributeName": "REQUIREMENTSTATUS",
            "required": false,
            "persistent": false,
            "title": "Requirement Status",
            "remarks": "Indicates if there is a labor record with the required craft assigned to the crew. If the value in the field is OK, there is a labor record with that craft assigned to the position. If the value is Not Assigned, there is no labor assigned to fulfill the requirement. If the value is Not Available, the labor record is assigned to other work and is unavailable to crew on that date. If the value is Requirement Not Met, there is a labor record assigned that does not match the Craft, Skill Level, Vendor, or Contract requirement. If the value is Multiple, there are multiple labor records assigned to the position at the same time.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "AMCREWLABPOSID",
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
            "remarks": "Relationship between AMCREWLABPOS and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWCRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship between AMCREWLABPOS and CRAFTSKILL tables to return only records having CRAFT.ISCREW marked as true.",
            "whereClause": "craft = :craft and craft in (select craft from craft where iscrew = :yes) and orgid = :orgid and (skilllevel = :skilllevel or skilllevel is null)",
            "cardinality": null
        },
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship between AMCREWLABPOS and CRAFTSKILL tables.",
            "whereClause": "craft = :craft and orgid = :orgid and (skilllevel = :skilllevel or skilllevel is null)",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship between AMCREWLABPOS and LABTRANS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWLABPOS",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWLABPOS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWLABPOSCREWDATE",
            "source": "AMCREW",
            "remarks": "Finds the labors for the given amcrew. This relationship will then be used to find the assigned labors for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABPOS",
            "source": "CRAFT",
            "remarks": "Relationship between CRAFT and AMCREWLABPOS tables.",
            "whereClause": "craft = :craft and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABPOS",
            "source": "JOBLABOR",
            "remarks": "Relationship to the AMCREWLABPOS table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABPOS",
            "source": "WPLABOR",
            "remarks": "Relationship to the AMCREWLABPOS table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        }
    ]
}