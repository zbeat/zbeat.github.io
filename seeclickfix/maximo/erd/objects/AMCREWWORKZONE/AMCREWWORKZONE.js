mos = {
    "objectName": "AMCREWWORKZONE",
    "className": "com.ibm.tivoli.maximo.workzone.AMCrewWorkZoneSet",
    "description": "Crews that are in a workzone",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWWORKZONEID",
    "primaryKeyColumns": [
        "AMCREW",
        "WORKZONE",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWWORKZONE",
            "parentKeys": "AMCREW ORGID",
            "targetKeys": "AMCREW ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Zone",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWWORKZONE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "WORKZONE",
            "targetObject": "AMCREWWORKZONE",
            "parentKeys": "WORKZONE, ORGID",
            "targetKeys": "WORKZONE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Zone",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AMCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew. This value must be unique within a work zone.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKZONE",
            "required": true,
            "persistent": true,
            "title": "Work Zone",
            "remarks": "Identifies the area in which a crew performs work. You can define more than one work zone for a crew, but you cannot define the same work zone multiple times for a single crew.",
            "sameAsAttribute": "WORKZONE",
            "sameAsObject": "WORKZONE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization the workzone is a part of.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DEFAULTZONE",
            "required": false,
            "persistent": true,
            "title": "Default",
            "remarks": "Indicates that this is the default work zone for a crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREWWORKZONEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship to find the amcrew",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WORKZONE",
            "target": "WORKZONE",
            "remarks": "Relationship from AMCREWWORKZONE to workzone",
            "whereClause": "workzone=:workzone and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWWORKZONE",
            "source": "AMCREW",
            "remarks": "Relationship to find the labor associated with the amcrew",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "DEFAMCREWWORKZONE",
            "source": "AMCREW",
            "remarks": "Relationship to find the default work zone associated with the amcrew",
            "whereClause": "amcrew=:amcrew and orgid=:orgid and defaultzone=1",
            "cardinality": null
        },
        {
            "name": "AMCREWWORKZONE",
            "source": "WORKZONE",
            "remarks": "Relationship from workzone to AMCREWWORKZONE",
            "whereClause": "workzone=:workzone and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "DEFAULTCREWZONE",
            "source": "WORKZONE",
            "remarks": "Relationship to find the default crew for the workzone",
            "whereClause": "workzone=:workzone and orgid=:orgid and defaultzone=:yes",
            "cardinality": null
        }
    ]
}