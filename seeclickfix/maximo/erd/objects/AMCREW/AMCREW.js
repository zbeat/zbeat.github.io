mos = {
    "objectName": "AMCREW",
    "className": "com.ibm.tivoli.maximo.amcrew.app.AMCrewSet",
    "description": "Crew",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "AMCREWID",
    "primaryKeyColumns": [
        "ORGID",
        "AMCREW"
    ],
    "logicalRelationships": [
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
            "objectName": "AMCREW",
            "targetObject": "AMCREWMODAVAIL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
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
            "objectName": "AMCREW",
            "targetObject": "AMCREWSTATHIS",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
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
            "objectName": "AMCREW",
            "targetObject": "AMCREWTOOLSQ",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Tools",
            "longDescription": null
        },
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
            "objectName": "AMCREW",
            "targetObject": "AMCREWWOTL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "JOBITEM",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "JOBLABOR",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "JOBPLAN",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "JOBSERVICE",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "JOBTOOL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "LABTRANS",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "LBSCREWVIEW",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "LBSLABORVIEW",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "LBSLOCATION",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "LBS Locations",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "PM",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Extra Capacity Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID1, AMCREW",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "SLROUTE",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WMASSIGNTMP",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "CALCORGID, AMCREW",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "CALCORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WOGEN",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "CALCORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "CALCORGID, AMCREW",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WPITEM",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WPLABOR",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WPMATERIAL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WPSERVICE",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "AMCREW",
            "targetObject": "WPTOOL",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "CALENDAR",
            "targetObject": "AMCREW",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Calendar",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "AMCREW",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Crew",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "AMCREW",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "AMCREW",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew End Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Start Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AMCREW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew''s Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "AMCREW",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "AMCREW",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID",
            "targetKeys": "ENDLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID",
            "targetKeys": "STARTLOCSITEID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID",
            "targetKeys": "WORKSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "AMCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identfies the crew. This value must be unique within an organization.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization to which the crew belongs.The default value is the organization associated with the user's insert site.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "AMCREWTYPE",
            "required": true,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "Identifies the crew's type. The crew type defines the crafts, qualifications, and tools that must comprise the crew.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the crew. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of the crew. When you create a crew, its default status is Active.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Identifies the work period for the crew. A calendar includes defined shifts. When you select a calendar value for the crew, Maximo also enters that value in the Shift field.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Identifies the crew's shift. When you select a calendar value for the crew, Maximo also enters that value in the Shift field.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Vendor",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CREWDATE",
            "required": false,
            "persistent": false,
            "title": "Date",
            "remarks": "a snapshot date of the crew",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "The start date for the date range of the completed work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "The end date for the date range of the completed work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "The identifier of the person group that is used in the Crews applications. You define crew work groups in the Person Groups application.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "DAY1",
            "required": false,
            "persistent": false,
            "title": "Day 1",
            "remarks": "Available hours for this crew on the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY2",
            "required": false,
            "persistent": false,
            "title": "Day 2",
            "remarks": "Available hours for this crew on the day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY3",
            "required": false,
            "persistent": false,
            "title": "Day 3",
            "remarks": "Available hours for this crew on the second day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY4",
            "required": false,
            "persistent": false,
            "title": "Day 4",
            "remarks": "Available hours for this crew on the third day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY5",
            "required": false,
            "persistent": false,
            "title": "Day 5",
            "remarks": "Available hours for this crew on the forth day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY6",
            "required": false,
            "persistent": false,
            "title": "Day 6",
            "remarks": "Available hours for this crew on the fifth day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY7",
            "required": false,
            "persistent": false,
            "title": "Day 7",
            "remarks": "Available hours for this crew on the sixth day after the scheduled work date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERCENTALLOC",
            "required": false,
            "persistent": false,
            "title": "Percent Allocated",
            "remarks": "Percentage of the crew's available hours that has been allocated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date the status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Time",
            "remarks": "Start time of available hours.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVAILABILITY",
            "required": false,
            "persistent": false,
            "title": "Available Hours",
            "remarks": "Available Hours for a given date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNED",
            "required": true,
            "persistent": false,
            "title": "Assigned",
            "remarks": "Indicates if crew with no availability during the date range is included in the available crew list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTLOCATION",
            "required": false,
            "persistent": true,
            "title": "Start Location",
            "remarks": "The first location in a street-level route.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STARTLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Start Location Site Id",
            "remarks": "Start Location SiteId",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ENDLOCATION",
            "required": false,
            "persistent": true,
            "title": "End Location",
            "remarks": "The last location in a street-level route.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ENDLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "End Location Site Id",
            "remarks": "Start Location SiteId",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LBSINTERVAL",
            "required": false,
            "persistent": true,
            "title": "Location Refresh (in seconds)",
            "remarks": "The interval to refresh the location of a labor or a crew. For example, if you enter 5, the GPS location is refreshed every five seconds.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LBSLABORBASED",
            "required": true,
            "persistent": true,
            "title": "Use Labor Location",
            "remarks": "Determines whether the location is based on one of the labors on the crew and not on other factors, such as the location of the GPS in the truck.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LBSDATAFROMWO",
            "required": true,
            "persistent": true,
            "title": "Save Location with Work Order",
            "remarks": "If the audit history is enabled, and you select the Use Labor Location checkbox, the labor location is stored with the work order data in the LBSLOCATION table. To enable the audit history, configure the Database Configuration application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Contract",
            "remarks": "The vendor contract number for the labor rate. Contracts are defined in the Labor Rate Contract application.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Contract Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "DISPLAYFROM",
            "required": false,
            "persistent": false,
            "title": "Display From",
            "remarks": "Displays the current date. Starting from this date, the Available Work Hours table window displays the seven days of the week. You can modify this date to select a new starting date.",
            "sameAsAttribute": "DISPLAYFROM",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "RATE",
            "required": false,
            "persistent": true,
            "title": "Hourly Rate",
            "remarks": "The sum of the individual labor rates plus the asset rates that are assigned to the crew.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORATE",
            "required": false,
            "persistent": true,
            "title": "Override Hourly Rate",
            "remarks": "Specifies the rate for the crew and overrides the hourly rate. The override hourly rate takes priority over the hourly rate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREWID",
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
            "attributeName": "WORKLOCATION",
            "required": false,
            "persistent": true,
            "title": "Work Location",
            "remarks": "The location where this labor code works. The work location may be used to select a labor code for work order assignments. This location's internal labor account is used to set the GL Control Account on all crafts for this labor that are not associated with a vendor. The GL Control Account, in turn, is used as the credit GL account for the labor transaction.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "WORKSITE",
            "required": false,
            "persistent": true,
            "title": "Work Site",
            "remarks": "The site where this labor code works.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DISPLAYTO",
            "required": false,
            "persistent": false,
            "title": "Display To",
            "remarks": "Displays the current date plus seven days date. Available Work Hours table window displays the seven days of the week. You can modify this date to select a new ending date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREWAVAIL",
            "target": "AMCREWAVAIL",
            "remarks": "Relationship to AMCREWAVAIL table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "AMCREWCHNGST",
            "target": "AMCREWCHNGST",
            "remarks": "Relationship between AMCREW and AMCREWCHNGST (virtual) tables.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "ASSIGNEDLABOR",
            "target": "AMCREWLABOR",
            "remarks": "Relationship between AMCREW and AMCREWLABOR tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and (enddate is null or enddate >= :crewdate) and effectivedate <= :crewdate",
            "cardinality": null
        },
        {
            "name": "AMCREWLAB_ENDDATE_NOTNULL",
            "target": "AMCREWLABOR",
            "remarks": "Relationship between AMCREW and AMCREWLABOR tables to bring records where ENDDATE is not null.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and enddate is not null",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR",
            "target": "AMCREWLABOR",
            "remarks": "Relationship between AMCREW and AMCREWLABOR tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWLABOR_ENDDATE",
            "target": "AMCREWLABOR",
            "remarks": "Relationship between AMCREW and AMCREWLABOR tables to bring records where ENDDATE is null.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and enddate is null",
            "cardinality": null
        },
        {
            "name": "AMCREWLABORCREWDATE",
            "target": "AMCREWLABOR",
            "remarks": "Finds the labors for the given amcrew. This relationship will then be used to find the assigned labors for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABPOS",
            "target": "AMCREWLABPOS",
            "remarks": "Relationship between AMCREW and AMCREWLABPOS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWLABPOSCREWDATE",
            "target": "AMCREWLABPOS",
            "remarks": "Finds the labors for the given amcrew. This relationship will then be used to find the assigned labors for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABUNRESTRICTED",
            "target": "AMCREWLABUNRESTRICTED",
            "remarks": "Relationship between AMCREWLABUNRESTRICTED and AMCREW",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "AMCREWMODAVAIL",
            "target": "AMCREWMODAVAIL",
            "remarks": "Relationship to AMCREWMODAVAIL table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "MODAVAIL",
            "target": "AMCREWMODAVAIL",
            "remarks": "Relationship from amcrew to modavail.",
            "whereClause": "amcrew = :amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWQUAL",
            "target": "AMCREWQUAL",
            "remarks": "Relationship between AMCREW and AMCREWQUAL tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWQUALCREWDATE",
            "target": "AMCREWQUAL",
            "remarks": "Finds the qualifications for the given amcrew. This relationship will then be used to find the assigned qualifications for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWSTATHIS",
            "target": "AMCREWSTATHIS",
            "remarks": "Relationship between AMCREW and AMCREWSTATHIS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWT",
            "target": "AMCREWT",
            "remarks": "Relationship between AMCREW and AMCREWT tables.",
            "whereClause": "amcrewtype = :amcrewtype and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL",
            "target": "AMCREWTOOL",
            "remarks": "Relationship between AMCREW and AMCREWTOOL tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWTOOL_ENDDATE",
            "target": "AMCREWTOOL",
            "remarks": "Relationship between AMCREW and AMCREWTOOL tables to bring records where ENDDATE is null.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and enddate is null",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL_ENDDATE_NOTNULL",
            "target": "AMCREWTOOL",
            "remarks": "Relationship between AMCREW and AMCREWTOOL tables to bring records where ENDDATE is not null.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and enddate is not null",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLCREWDATE",
            "target": "AMCREWTOOL",
            "remarks": "Finds the tools for the given amcrew. This relationship will then be used to find the assigned tools for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "ASSIGNEDTOOL",
            "target": "AMCREWTOOL",
            "remarks": "Relationship between AMCREW and AMCREWTOOL tables to bring effective tools (assets).",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and (enddate is null or enddate >= :crewdate) and effectivedate <= :crewdate",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLSQ",
            "target": "AMCREWTOOLSQ",
            "remarks": "Relationship between AMCREW and AMCREWTOOLSQ tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "AMCREWTOOLSQCREWDATE",
            "target": "AMCREWTOOLSQ",
            "remarks": "Finds the tools for the given amcrew. This relationship will then be used to find the assigned tools for a particular day.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLUNRESTRICTED",
            "target": "AMCREWTOOLUNRESTRICTED",
            "remarks": "Relationship between AMCREWTOOLUNRESTRICTED and AMCREW",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "AMCREWWORKZONE",
            "target": "AMCREWWORKZONE",
            "remarks": "Relationship to find the labor associated with the amcrew",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "DEFAMCREWWORKZONE",
            "target": "AMCREWWORKZONE",
            "remarks": "Relationship to find the default work zone associated with the amcrew",
            "whereClause": "amcrew=:amcrew and orgid=:orgid and defaultzone=1",
            "cardinality": null
        },
        {
            "name": "ASSIGNMENT",
            "target": "ASSIGNMENT",
            "remarks": "Relationship from table AMCREW to ASSIGNMENT.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWWORKORDERS",
            "target": "ASSIGNMENT",
            "remarks": "Find the active workorders for the crew.",
            "whereClause": "orgid=:orgid and status in (select value from synonymdomain where maxvalue in ('ASSIGNED','STARTED','COMPLETE') and domainid='ASSTAT') and amcrew=:amcrew",
            "cardinality": null
        },
        {
            "name": "AMCREWCONTRACT",
            "target": "CONTRACT",
            "remarks": "Relationship between AMCREW and CONTRACT tables.",
            "whereClause": "contractnum = :contractnum and revisionnum = :revisionnum and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "DAILYCREWREASSIGN",
            "target": "DAILYCREWREASSIGN",
            "remarks": "Relationship between AMCREW and DAILYCREWREASSIGN(virtual) tables.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the AMCREW to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "JOBLABOR",
            "target": "JOBLABOR",
            "remarks": "Relationship to check if the crew is being used by a JobPlan.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to check if the crew is being used by a JobPlan.",
            "whereClause": "amcrew=:amcrew",
            "cardinality": null
        },
        {
            "name": "LABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship between AMCREW and LABTRANS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "LBSLOCATION",
            "target": "LBSLOCATION",
            "remarks": "Relationship to find the lbslocation from a crew",
            "whereClause": "refobject='AMCREW' and key1 =:orgid and key2 =:amcrew",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ENDLOCATION",
            "target": "LOCATIONS",
            "remarks": "Get end location for Crew",
            "whereClause": "location=:endlocation and siteid=:endlocsiteid",
            "cardinality": null
        },
        {
            "name": "WORKLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the locations table.  Used to find the location that is the crews work location, in the crews worksite.  The resultset will contain 0 or 1 object.",
            "whereClause": "location=:worklocation and siteid=:worksite",
            "cardinality": null
        },
        {
            "name": "STARTLOCATION",
            "target": "LOCATIONS",
            "remarks": "Get Start location for Crew",
            "whereClause": "location=:startlocation and siteid=:startlocsiteid",
            "cardinality": null
        },
        {
            "name": "WORKSITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table.  Returns the site object for this crews worksite and organization.  (amcrew.worksite=site.siteid and amcrew.orgid=site.orgid).  This returns zero or one object.",
            "whereClause": "siteid=:worksite and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "TOOLTRANS",
            "target": "TOOLTRANS",
            "remarks": "Relationship between AMCREW and TOOLTRANS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause).",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the AMCREW to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "WORKPERIOD",
            "target": "WORKPERIOD",
            "remarks": "Relationship to WORKPERIOD.",
            "whereClause": "orgid=:orgid  and calnum=:calnum  and shiftnum=:shiftnum",
            "cardinality": null
        },
        {
            "name": "WPLABOR",
            "target": "WPLABOR",
            "remarks": "Relationship to check if the crew is being used by an active WO",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "AMCREW",
            "source": "AMCREWCHNGST",
            "remarks": "Relationship to get data from AMCREW for a given crew.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "AMCREWLABOR",
            "remarks": "Relationship between  AMCREWLABOR and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "AMCREWLABPOS",
            "remarks": "Relationship between AMCREWLABPOS and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "AMCREWQUAL",
            "remarks": "Relationship between AMCREWQUAL and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "AMCREWT",
            "remarks": "Relationship to associate a Crew with an CrewType.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "AMCREWTOOL",
            "remarks": "Relationship between  AMCREWTOOL and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "AMCREWWORKZONE",
            "remarks": "Relationship to find the amcrew",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "ASSIGNMENT",
            "remarks": "Relationship from table Assignment to Crew.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "DAILYCREWREASSIGN",
            "remarks": "Relationship between DAILYCREWREASSIGN and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "JOBLABOR",
            "remarks": "Relationship to the Crew table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "LABORWORKZONE",
            "remarks": "Relationship to find the amcrew",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from non persistent table LABTRANSENTERBY to AMCREW.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "LBSCREWVIEW",
            "remarks": "Relationship to find the amcrew from an lbscrewview",
            "whereClause": "orgid = :key1 and amcrew = :key2",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "SKDPROJECT",
            "remarks": "For Graphical Assignment Report",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "SLROUTE",
            "remarks": "Get Crew for SLROUTE",
            "whereClause": "orgid=:orgid and amcrew=:amcrew",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship from table WMAssignment to Crew.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "WORKORDER",
            "remarks": "Relationship to the Crew table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREW",
            "source": "WPLABOR",
            "remarks": "Relationship to the Crew table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        }
    ]
}