mos = {
    "objectName": "AMCREWWOLAB",
    "className": "com.ibm.tivoli.maximo.amcrew.app.labor.AMCrewWoLabSet",
    "description": "Persistent table for temporary labor data",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWWOLABID",
    "primaryKeyColumns": [
        "AMCREWWOLABID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Vendor on Crew Labor",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PREMIUMPAY",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "PREMIUMPAYCODE, ORGID",
            "targetKeys": "PREMIUMPAYCODE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Premium Pay",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": true,
            "title": "Task",
            "remarks": "Task ID",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Order number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "POSITION",
            "required": true,
            "persistent": true,
            "title": "Position",
            "remarks": "Identifies the labor code's position on the crew.",
            "sameAsAttribute": "POSITION",
            "sameAsObject": "AMCTCRAFT"
        },
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identifies the labor code of the person who performed the work.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Name",
            "remarks": "Name of person",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CRAFT",
            "required": false,
            "persistent": true,
            "title": "Craft",
            "remarks": "Identifies the craft that performed the work.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "Identifies the skill level of the person who performed the work.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Identifies the vendor who supplied the contracted labor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract Number",
            "remarks": "Identifies the vendor's contract number for the contracted labor.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Crew",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "AMCREWWOLABID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALACTUALHOURS",
            "required": false,
            "persistent": true,
            "title": "Total Actual Hours",
            "remarks": "Total number of hours determined from the multiple WO start and end times",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOTALREGULARHOURS",
            "required": false,
            "persistent": true,
            "title": "Total Regular Hours",
            "remarks": "Total number of regular hours (not overtime, holiday, weekend, etc.) worked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREMIUMPAYCODE",
            "required": false,
            "persistent": true,
            "title": "Premium Pay Code",
            "remarks": "Resource Pool",
            "sameAsAttribute": "PREMIUMPAYCODE",
            "sameAsObject": "PREMIUMPAY"
        },
        {
            "attributeName": "TOTALPREMIUMPAYHOURS",
            "required": false,
            "persistent": true,
            "title": "Total Premium Pay Hours",
            "remarks": "Total number of hours for which the labor will be paid the premium rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "The site the location belongs to.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WOLABLABOR",
            "target": "LABOR",
            "remarks": "Relationship from table AMCREWWOLAB to LABOR.",
            "whereClause": "laborcode=:laborcode",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWWOLAB",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from table LABTRANSENTERBY to AMCREWWOLAB.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        }
    ]
}