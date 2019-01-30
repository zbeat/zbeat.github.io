mos = {
    "objectName": "AMCREWLABOR",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCrewLaborSet",
    "description": "Crew Labor",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AMCREWLABORID",
    "primaryKeyColumns": [
        "ORGID",
        "AMCREW",
        "POSITION",
        "AMCREWLABORID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Labor",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Labor Calendar",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Crew Labor",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Labor",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Labor Shift",
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
            "title": "Organizationorgan",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "POSITION",
            "required": true,
            "persistent": true,
            "title": "Position",
            "remarks": "The specific role on the crew for the labor resource.",
            "sameAsAttribute": "POSITION",
            "sameAsObject": "AMCTCRAFT"
        },
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identifies the labor filling the required crew position. Labor can be assigned to only one crew at a time. Maximo displays a warning if the labor you choose for a position does not have any of the following: the craft, skill level, or qualification specified for the crew, or the availability that the crew's calendar and shift require.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "CRAFT",
            "required": false,
            "persistent": true,
            "title": "Craft",
            "remarks": "Craft",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "The level of skill or expertise in a particular craft. You can assign a labor code with a skill level other than the specified one for the position.",
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
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract Number",
            "remarks": "Identifies the vendor's contract number for the craft.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
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
            "attributeName": "AVAILHOURS",
            "required": false,
            "persistent": false,
            "title": "Available Hours",
            "remarks": "The number of hours that the labor is available to the crew for that specified date. Hours can be reduced based on work assignments or modified availability on the Person record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREWLABORID",
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
            "remarks": "Start date of the labor code's assignment to the crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "Date the labor code's crew  assignment ends.",
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
            "remarks": "Relationship between  AMCREWLABOR and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR",
            "target": "AMCREWLABOR",
            "remarks": "Relationship between AMCREWLABOR and AMCREWLABOR to get the LaborCode.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABORWOS",
            "target": "ASSIGNMENT",
            "remarks": "Finds the workorders that the labor is assigned to that has a scheduled start and scheduled finish date",
            "whereClause": "orgid=:orgid  and laborcode=:laborcode and (craft is null or craft=:craft) and (skilllevel is null or skilllevel=:skilllevel) and (vendor is null or vendor=:vendor) and (contractnum is null or contractnum=:contractnum)",
            "cardinality": null
        },
        {
            "name": "CRAFT",
            "target": "CRAFT",
            "remarks": "Relationship to CRAFT table to allow subsequent retrieval of craft related data such as craftrate",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "CRAFTENABLECREW",
            "target": "CRAFT",
            "remarks": "Relationship to find crew enabled crafts",
            "whereClause": "craft=:craft and orgid=:orgid and iscrew=:yes",
            "cardinality": null
        },
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship between AMCREWLABOR and CRAFTSKILL tables.",
            "whereClause": "craft = :craft and orgid = :orgid and (skilllevel = :skilllevel or skilllevel is null)",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship between AMCREWLABOR and LABOR tables.",
            "whereClause": "laborcode = :laborcode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "LABORQUAL",
            "target": "LABORQUAL",
            "remarks": "Relationship between AMCREWLABOR and active LABORQUAL.",
            "whereClause": "laborcode = :laborcode and orgid = :orgid and status in (select value from synonymdomain where domainid = 'QUALSTAT' and maxvalue in ('ACTIVE'))",
            "cardinality": null
        },
        {
            "name": "MODAVAILNONWORK",
            "target": "MODAVAIL",
            "remarks": "Finds the non-working entries for a particular person",
            "whereClause": "personid in (select personid from labor where laborcode = :laborcode and orgid = :orgid) and reasoncode in ( select value from synonymdomain where domainid='RSNCODE' and maxvalue='NON-WORK')",
            "cardinality": null
        },
        {
            "name": "PERSONCAL",
            "target": "PERSONCAL",
            "remarks": "Relationship between AMCREWLABOR and PERSONCAL tables.",
            "whereClause": "personid in (select personid from labor where laborcode = :laborcode and orgid = :orgid) and orgid = :orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSIGNEDLABOR",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWLABOR tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and (enddate is null or enddate >= :crewdate) and effectivedate <= :crewdate",
            "cardinality": null
        },
        {
            "name": "AMCREWLAB_ENDDATE_NOTNULL",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWLABOR tables to bring records where ENDDATE is not null.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and enddate is not null",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWLABOR tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWLABOR_ENDDATE",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and AMCREWLABOR tables to bring records where ENDDATE is null.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and enddate is null",
            "cardinality": null
        },
        {
            "name": "AMCREWLABORCREWDATE",
            "source": "AMCREW",
            "remarks": "Finds the labors for the given amcrew. This relationship will then be used to find the assigned labors for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR",
            "source": "AMCREWLABOR",
            "remarks": "Relationship between AMCREWLABOR and AMCREWLABOR to get the LaborCode.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR",
            "source": "DAILYCREWREASSIGN",
            "remarks": "Relationship between DAILYCREWREASSIGN and AMCREWLABOR tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and ((enddate is not null and ((enddate <= :enddate and enddate >= :currentdate) or (effectivedate <= :currentdate and enddate >= :enddate))) or (effectivedate <= :enddate and enddate >= :currentdate) or (effectivedate <= :currentdate and enddate is null))",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR",
            "source": "LABOR",
            "remarks": "Relationship to the AMCREWLABOR table,used to find crews where this labor is assigned to.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR_LABOR",
            "source": "LABOR",
            "remarks": "Relationship to the AMCREWLABOR table,used to find crews where this labor is assigned to.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid and enddate is not null",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from table LABTRANSENTERBY to AMCREWLABOR.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid and ((:workdate between effectivedate and enddate) or (:workdate >= effectivedate and enddate is null))",
            "cardinality": null
        }
    ]
}