mos = {
    "objectName": "AMCREWTOOL",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCrewToolSet",
    "description": "Crew Tools",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWTOOLID",
    "primaryKeyColumns": [
        "ORGID",
        "AMCREW",
        "TOOLSEQ",
        "AMCREWTOOLID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tools",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Asset",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Calendar",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Item",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Set",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tool Shift",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREWTOOL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
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
            "remarks": "Identifies the generic title of a required tool for the crew. The resource identifier must be unique within the crew in an organization. For example, if two  vehicles are needed for a crew, the generic titles might be vehicle1 and vehicle2.",
            "sameAsAttribute": "TOOLSEQ",
            "sameAsObject": "AMCTTOOL"
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the specific asset assigned to meet the tool requirement.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site of the Asset",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Calendar Number",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Shift Number",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "AMCREWTOOLID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EFFECTIVEDATE",
            "required": true,
            "persistent": true,
            "title": "Effective Date",
            "remarks": "Start date of the tool's assignment to the crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "End Date",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item Set Id",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "AVAILHOURS",
            "required": false,
            "persistent": false,
            "title": "Available Hours",
            "remarks": "The number of hours that the asset is available to the crew for that specified date. Hours can be reduced based on work assignments or assigned shift.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "The end date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWSTARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "The start date for the date range of the assigned work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship between  AMCREWTOOL and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL",
            "target": "AMCREWTOOL",
            "remarks": "Relationship between AMCREWTOOL and AMCREWTOOL to get the assetnum.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLOTHERCREWS",
            "target": "AMCREWTOOL",
            "remarks": "Relationship that brings AMCREWTOOL records used in other Crews.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid and orgid = :orgid and amcrew <> :amcrew",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLSQ",
            "target": "AMCREWTOOLSQ",
            "remarks": "Relationship between AMCREWTOOL and AMCREWTOOLSQ tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and toolseq = :toolseq",
            "cardinality": null
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship between AMCREWTOOL and ASSET tables.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship between AMCREWTOOL and ITEM tables.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "ASSETWOS",
            "target": "WORKORDER",
            "remarks": "Finds the workorders that the asset is assigned to that has a scheduled start and scheduled finish date",
            "whereClause": "status in (select value from synonymdomain where domainid='WOSTATUS' and maxvalue in ('APPR','INPRG','WMATL')) and assetnum=:assetnum and siteid=:siteid and schedfinish is not null and schedstart is not null",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREWTOOL",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWTOOL tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWTOOL_ENDDATE",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWTOOL tables to bring records where ENDDATE is null.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and enddate is null",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL_ENDDATE_NOTNULL",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWTOOL tables to bring records where ENDDATE is not null.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and enddate is not null",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLCREWDATE",
            "source": "AMCREW",
            "remarks": "Finds the tools for the given amcrew. This relationship will then be used to find the assigned tools for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "ASSIGNEDTOOL",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWTOOL tables to bring effective tools (assets).",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and (enddate is null or enddate >= :crewdate) and effectivedate <= :crewdate",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL",
            "source": "AMCREWTOOL",
            "remarks": "Relationship between AMCREWTOOL and AMCREWTOOL to get the assetnum.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLOTHERCREWS",
            "source": "AMCREWTOOL",
            "remarks": "Relationship that brings AMCREWTOOL records used in other Crews.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid and orgid = :orgid and amcrew <> :amcrew",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL",
            "source": "AMCREWTOOLSQ",
            "remarks": "Relationship between AMCREWTOOLSQ and AMCREWTOOL tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and toolseq = :toolseq",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLMAXDATE",
            "source": "AMCREWTOOLSQ",
            "remarks": "Relationship between AMCREWTOOLSQ and AMCREWTOOL tables having max(EFFECTIVEDATE).",
            "whereClause": "orgid = :orgid and amcrew = :amcrew and toolseq = :toolseq and (enddate is null and effectivedate = (select max(effectivedate) from  amcrewtool where amcrew = :amcrew and orgid = :orgid and toolseq = :toolseq))",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLASSET",
            "source": "AMCREWTOOLUNRESTRICTED",
            "remarks": "Finds assets to find possible conflicts before creating an unrestrictedtool",
            "whereClause": "assetnum=:assetnum siteid=:siteid and (enddate>=:effectivedate or enddate is null)",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL",
            "source": "ASSET",
            "remarks": "Relationship to the AMCREWASSET table, used to find crews where this asset is assigned to.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL",
            "source": "DAILYCREWREASSIGN",
            "remarks": "Relationship between Relationship between AMCREW and AMCREWTOOL tables. and AMCREWTOOL tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and ((enddate is not null and ((enddate <= :enddate and enddate >= :currentdate) or (effectivedate <= :currentdate and enddate >= :enddate))) or (effectivedate <= :enddate and enddate >= :currentdate) or (effectivedate <= :currentdate and enddate is null))",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from table LABTRANSENTERBY to AMCREWTOOL.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid and ((:workdate between effectivedate and enddate) or (:workdate >= effectivedate and enddate is null))",
            "cardinality": null
        }
    ]
}