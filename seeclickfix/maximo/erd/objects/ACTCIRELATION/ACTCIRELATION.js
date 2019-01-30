mos = {
    "objectName": "ACTCIRELATION",
    "className": "psdi.app.actualci.ActCIRelationSet",
    "description": "Actual CI Relation Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ACTCIRELATIONID",
    "primaryKeyColumns": [
        "SOURCECI",
        "TARGETCI",
        "RELATIONNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "ACTCIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "ANCESTORCI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CI Relationships where this is the top level in the hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "ACTCIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "SOURCECI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CI Relationships where this is the relationship source.",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "ACTCIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "TARGETCI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CI Relationships where this is the relationship target.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ACTCIRELATION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "ACTCIRELATION",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "RELATIONNUM",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ACTCIRELATIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCECI",
            "required": true,
            "persistent": true,
            "title": "Source Actual CI",
            "remarks": "Identifier of the source Actual CI that has a relation with the target Actual CI",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "TARGETCI",
            "required": true,
            "persistent": true,
            "title": "Target Actual CI",
            "remarks": "Identifier of the target Actual CI that has a relation with the source Actual CI",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "RELATIONNUM",
            "required": true,
            "persistent": true,
            "title": "Relation",
            "remarks": "Identifier of the relationship that exists between the source CI and target CI",
            "sameAsAttribute": "RELATIONNUM",
            "sameAsObject": "RELATION"
        },
        {
            "attributeName": "ANCESTORCI",
            "required": false,
            "persistent": true,
            "title": "Ancestor Actual CI",
            "remarks": "If this relation is a containment relation then this column would identifier the top level Actual CI in that containment tree.",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Last Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date of Actual CI Relation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCECIGUID",
            "required": false,
            "persistent": true,
            "title": "Source Actual CI GUID",
            "remarks": "Source Actual CI GUID",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "TARGETCIGUID",
            "required": false,
            "persistent": true,
            "title": "Target Actual CI GUID",
            "remarks": "Target Actual CI GUID",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "SWAPPED",
            "required": true,
            "persistent": true,
            "title": "Swapped",
            "remarks": "A flag to indicate that the relationship has been swapped.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SOURCEACTCI",
            "target": "ACTCI",
            "remarks": "Relationship to the ACTCI table, used to find actual ci for a given sourceci",
            "whereClause": "actcinum=:sourceci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETACTCI",
            "target": "ACTCI",
            "remarks": "Relationship to the ACTCI table, used to find actual ci for a given targetci",
            "whereClause": "actcinum=:targetci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETCLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CLASSSTRUCTURE table for the targetci",
            "whereClause": "classstructureid in (select classstructureid from actci where actcinum=:targetci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCECLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CLASSSTRUCTURE table for the souceci",
            "whereClause": "classstructureid in (select classstructureid from actci where actcinum=:sourceci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "target": "RELATION",
            "remarks": "Relationship to the Relation table, used to find relation for a given relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCIRELATIONRELATIONRULE",
            "target": "RELATIONRULES",
            "remarks": "Relationship to the RelationRules table, used to find relationrule for a given relation and sourceci classstructureid and targetci classstructureid",
            "whereClause": "relationnum=:relationnum and sourceclass = (select classstructureid from actci where actcinum=:sourceci) and targetclass = (select classstructureid from actci where actcinum=:targetci)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RELATEDACTCI",
            "source": "ACTCI",
            "remarks": "Relationship to the ACTCIRelation table, used to find related ACTCIs for a given ACTCI",
            "whereClause": "sourceci=:actcinum or targetci=:actcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCIRELATION",
            "source": "RELATION",
            "remarks": "Relationship to the actcirelation table, used to find ACTCIRELATION record for a given relationship",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        }
    ]
}