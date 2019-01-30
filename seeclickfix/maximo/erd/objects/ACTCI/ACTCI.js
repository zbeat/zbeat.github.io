mos = {
    "objectName": "ACTCI",
    "className": "psdi.app.actualci.ActCISet",
    "description": "Actual CI Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ACTCIID",
    "primaryKeyColumns": [
        "ACTCINUM"
    ],
    "logicalRelationships": [
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
            "objectName": "ACTCI",
            "targetObject": "ACTCISPEC",
            "parentKeys": "ACTCINUM",
            "targetKeys": "ACTCINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual CI",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual CI",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CI",
            "parentKeys": "ACTCINUM",
            "targetKeys": "ACTCINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual CI",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CI",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "ANCESTORCI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "PARENTCI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "SOURCECI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "TARGETCI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATIONHIS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "SOURCECI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATIONHIS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "TARGETCI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CISPEC",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CISPECHIS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CISTATUS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "INCIDENT",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Configuration Item",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "PROBLEM",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "RECONCILINK",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "ACTCINUM",
            "targetKeys": "ANCESTORCINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Configuration Item",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "SR",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "TICKET",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "0 to 1",
            "status": "VERIFIED",
            "description": "Actual CI for Ticket",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual CI for Activity",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "WOCHANGE",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual CI",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "WORELEASE",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual CI for Release",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "WORKORDER",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 30",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "ACTCI",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "ACTCI",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ACTCI",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ACTCIID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTCINUM",
            "required": true,
            "persistent": true,
            "title": "Actual CI",
            "remarks": "Actual CI Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the Actual CI",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GUID",
            "required": false,
            "persistent": true,
            "title": "GUID",
            "remarks": "Actual CI's GUID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTSCANDT",
            "required": true,
            "persistent": true,
            "title": "Last Scan Date",
            "remarks": "Date and time when the Actual CI was last scanned.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date of Actual CI",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Classification of the Actual CI.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": false,
            "title": "Configuration Item",
            "remarks": "Authorized CI Identifier",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "USELINKRULES",
            "required": true,
            "persistent": false,
            "title": "Use Link Results",
            "remarks": "Indicates whether to filter ci by using link rules",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOPLEVELONLY",
            "required": true,
            "persistent": false,
            "title": "Top Level Only",
            "remarks": "Indicates whether to filter the ci list to include only ci whose classification are marked as top level",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERBYCITEMPLATE",
            "required": true,
            "persistent": false,
            "title": "Fliter by CI Hierarchy",
            "remarks": "Indicates whether to filter cis based on the ci templates for the actci",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTMODIFIEDDATE",
            "required": false,
            "persistent": false,
            "title": "Last Modified Date",
            "remarks": "Date and time when the actual CI was modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RELATEDACTCI",
            "target": "ACTCIRELATION",
            "remarks": "Relationship to the ACTCIRelation table, used to find related ACTCIs for a given ACTCI",
            "whereClause": "sourceci=:actcinum or targetci=:actcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCISPEC",
            "target": "ACTCISPEC",
            "remarks": "Relationship to the actcispec table, used to find the actcispec records for a given actci (actci.actciid=actcispec.refobjectid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:actciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCISPECCLASS",
            "target": "ACTCISPEC",
            "remarks": "Relationship to the actcispec table, used to find the actcispec records for a given actual configuration item (actci.actcinum=actcispec.actcinum and actci.classstructureid=actcispec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "actcinum = :actcinum and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find a Authorized CI record that is linked to the Actual CI record. (actci.actcinum = ci.actcinum). The resulting set will contain zero or one object.",
            "whereClause": "actcinum = :actcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIEXISTS",
            "target": "CI",
            "remarks": "Relationship to the ci table, used to find CI record for a given relationship",
            "whereClause": "cinum=:actcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NOACTCI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find ci not linked to any actci",
            "whereClause": "actcinum is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given actci (actci.classstructureid=classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given actual configuration item (classspec.classstructureid = actci.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given Actual CI specification. (classstructure.classstructureid = actci.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMP",
            "target": "OMP",
            "remarks": "Relationship between Actual CIs and OMPs, that shows OMPs that manage the CI.",
            "whereClause": "ompguid in (select distinct ompguid from ompcirln where ciguid=:guid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDOMP",
            "target": "OMP",
            "remarks": "Relationship to the OMP table used to find the OMP linked to the actual CI",
            "whereClause": "ompguid in (select ompguid from ompcirln where ompcirln.ciguid=:guid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPCIRLN",
            "target": "OMPCIRLN",
            "remarks": "Relationship between actual CIs and OMPs, that shows all of the OMPs that manage a CI.",
            "whereClause": "ciguid=:guid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROMOTEACTCI",
            "target": "PROMOTEACTCI",
            "remarks": "Relationship from actci to promoteactci",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SOURCEACTCI",
            "source": "ACTCIRELATION",
            "remarks": "Relationship to the ACTCI table, used to find actual ci for a given sourceci",
            "whereClause": "actcinum=:sourceci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETACTCI",
            "source": "ACTCIRELATION",
            "remarks": "Relationship to the ACTCI table, used to find actual ci for a given targetci",
            "whereClause": "actcinum=:targetci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCI",
            "source": "CDMCITYPES",
            "remarks": "Relation from CdmCiTypes to ACTCI table.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTUALCI",
            "source": "CI",
            "remarks": "Relationship to the ActualCI table, used to find actual CI for a given CI",
            "whereClause": "actcinum=:actcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCI",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ACTCI table, used to find the ACTCI records for a given classstructure. (classstructure.classstructureid = actci.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPLDASSET_ACTCI",
            "source": "COMPUTERSYSTEM",
            "remarks": "Relationship to the ACTCI object, used to find the ACTCI record for the dpldasset based on the guid.",
            "whereClause": "guid=:guid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NDASSET_ACTCI",
            "source": "NETDEVICE",
            "remarks": "Relationship to the ACTCI object, used to find the ACTCI record for the ndasset based on the guid.",
            "whereClause": "guid=:guid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NPASSET_ACTCI",
            "source": "NETPRINTER",
            "remarks": "Relationship to the ACTCI object, used to find the ACTCI record for the npasset based on the guid.",
            "whereClause": "guid=:guid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCI",
            "source": "OMPCIRLN",
            "remarks": "Relationship to ACTCI table, finds the corresponding CI",
            "whereClause": "guid=:ciguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCILINK_ACTCI",
            "source": "RECONCILINK",
            "remarks": "Relationship to the ACTCI table, used to find the ACTCI record for the reconcilink based on the actciid.",
            "whereClause": "actciid=:actciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTCI",
            "source": "RECONCIRESULT",
            "remarks": "Relationship to the ACTCI table, used to find the ACTCI record for the reconciresult based on the actciid.",
            "whereClause": "actciid=:actciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCIRESULT_ACTCI",
            "source": "RECONCIRESULT",
            "remarks": "Relationship to the ACTCI table, used to find the ACTCI record for the reconciresult based on the actcikeyvalue",
            "whereClause": "actciid=:actcikeyvalue",
            "cardinality": "UNDEFINED"
        }
    ]
}