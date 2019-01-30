mos = {
    "objectName": "AMCREWT",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCrewTypeSet",
    "description": "Crew Template Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWTID",
    "primaryKeyColumns": [
        "AMCREWTYPE",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "AMCREWT",
            "targetObject": "AMCREW",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
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
            "objectName": "AMCREWT",
            "targetObject": "AMCTSTATHIST",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Status",
            "longDescription": null
        },
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
            "objectName": "AMCREWT",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "JOBITEM",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "JOBLABOR",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "JOBSERVICE",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "JOBTOOL",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "LABTRANS",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "WPITEM",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "WPLABOR",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "WPMATERIAL",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "WPSERVICE",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        },
        {
            "objectName": "AMCREWT",
            "targetObject": "WPTOOL",
            "parentKeys": "AMCREWTYPE, ORGID",
            "targetKeys": "AMCREWTYPE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "AMCREWT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AMCREWTYPE",
            "required": true,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "Identifies the type of work the crew is designed to perform.This value must be unique for all crew type records within an organization.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the crew type. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization to which the crew type belongs.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "STANDARDRATE",
            "required": false,
            "persistent": true,
            "title": "Hourly Rate",
            "remarks": "The sum of the individual craft rates plus the tool rates that are assigned to the crew type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSTANDARDRATE",
            "required": false,
            "persistent": true,
            "title": "Override Hourly Rate",
            "remarks": "Specifies the rate for the crew type and overrides the hourly rate. The override hourly rate takes priority over the hourly rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "Identifies the crew's status. Valid status types are Active and Inactive. When you create a crew type, the default status is Active.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date the status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREWTID",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
            "attributeName": "EFFRATE",
            "required": false,
            "persistent": false,
            "title": "Effective Rate",
            "remarks": "Effective Rate",
            "sameAsAttribute": "OSTANDARDRATE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "WORKZONETYPE",
            "required": false,
            "persistent": true,
            "title": "Work Zone Type",
            "remarks": "The type of the work zone",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "WORKZONE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship to associate a Crew with an CrewType.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCTCHANGESTAT",
            "target": "AMCTCHGSTAT",
            "remarks": "Relationship to the non-persistent table AMCTCHGSTAT. (No Where Clause).",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "AMCTCRAFT",
            "target": "AMCTCRAFT",
            "remarks": "Required crafts for crew template.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCTQUAL",
            "target": "AMCTQUAL",
            "remarks": "Required qualifications for crew template.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCTSTATHIST",
            "target": "AMCTSTATHIST",
            "remarks": "Relationship to the AMCTSTATHIST table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCTTOOL",
            "target": "AMCTTOOL",
            "remarks": "Required tools for crew template.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DOCLINKS table, used to find all document records for the crew template.",
            "whereClause": "ownertable='AMCREWT' and ownerid=:amcrewtid",
            "cardinality": null
        },
        {
            "name": "JOBLABOR",
            "target": "JOBLABOR",
            "remarks": "Relationship to check if the crew type is being used by a JobPlan.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship to check if the crew type is being used by a LABTRANS.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "SYNONYMDOMAIN",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to get status description field in the change status dialog box.",
            "whereClause": "domainid='CREWTSTATUS' and value=:status",
            "cardinality": null
        },
        {
            "name": "WPLABOR",
            "target": "WPLABOR",
            "remarks": "Relationship to check if the crew type is being used by a WO.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWT",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWT tables.",
            "whereClause": "amcrewtype = :amcrewtype and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWT",
            "source": "AMCTCRAFT",
            "remarks": "Relationship between AMCTCRAFT and AMCREWT tables.",
            "whereClause": "amcrewtype = :amcrewtype and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWT",
            "source": "AMCTQUAL",
            "remarks": "Relationship between AMCTQUAL and AMCREWT tables.",
            "whereClause": "amcrewtype = :amcrewtype and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWT",
            "source": "ASSIGNMENT",
            "remarks": "Relationship between ASSIGNMENT table and AMCREWT table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWT",
            "source": "JOBLABOR",
            "remarks": "Relationship to the Crew Type table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWT",
            "source": "WPLABOR",
            "remarks": "Relationship to the Crew Type table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        }
    ]
}