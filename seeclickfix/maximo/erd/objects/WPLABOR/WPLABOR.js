mos = {
    "objectName": "WPLABOR",
    "className": "psdi.app.workorder.WPLaborSet",
    "description": "The WPLABOR Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WPLABORUID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "WPLABORID"
    ],
    "logicalRelationships": [
        {
            "objectName": "WPLABOR",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "SITEID, WONUM, WPLABORID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Labor",
            "longDescription": null
        },
        {
            "objectName": "WPLABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "REPFACSITEID, ORIGRECORDID, WPLABORID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "WPLABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "REPFACSITEID, PARENT, WPLABORID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "WPLABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "REPFACSITEID, WOGROUP, WPLABORID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "WPLABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "REPFACSITEID, WONUM, WPLABORID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "WPLABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "SITEID, ORIGRECORDID, WPLABORID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "WPLABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "SITEID, PARENT, WPLABORID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "WPLABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "SITEID, WOGROUP, WPLABORID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "WPLABOR",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, WONUM, WPLABORID",
            "targetKeys": "SITEID, WONUM, WPLABORID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Labor",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "COMPANIES",
            "targetObject": "WPLABOR",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Work Plan Labor",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "WPLABOR",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "WPLABOR",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "WPLABOR",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WPLABOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WPLABOR",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WPLABOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WPLABOR",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Plan Labor",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Plan Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "LABORCODE",
            "required": false,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identifies the labor planned for the work order task.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "LABORHRS",
            "required": true,
            "persistent": true,
            "title": "Regular Hours",
            "remarks": "Number of labor hours required to complete the work.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RATE",
            "required": true,
            "persistent": true,
            "title": "Rate",
            "remarks": "Labor Rate When Workorder Was Approved",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WPL1",
            "required": false,
            "persistent": true,
            "title": "Wpl1",
            "remarks": "Extra Field",
            "sameAsAttribute": "JL1",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "WPL2",
            "required": false,
            "persistent": true,
            "title": "Wpl2",
            "remarks": "Extra Field",
            "sameAsAttribute": "JL2",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "WPL3",
            "required": false,
            "persistent": true,
            "title": "Wpl3",
            "remarks": "Extra Field",
            "sameAsAttribute": "JL3",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "WPL4",
            "required": false,
            "persistent": true,
            "title": "Wpl4",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WPL5",
            "required": false,
            "persistent": true,
            "title": "Wpl5",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WPL6",
            "required": false,
            "persistent": true,
            "title": "Wpl6",
            "remarks": "Extra Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WPLABORID",
            "required": true,
            "persistent": true,
            "title": "WP Labor ID",
            "remarks": "A Unique ID that is assigned to this row whenever it is inserted into the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "Identifies the vendor or contractor, by company code, which will supply the labor resources.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "RATEHASCHANGED",
            "required": true,
            "persistent": true,
            "title": "Rate Changed ",
            "remarks": "Indicates whether a user has overwritten the value in the Rate field. If the check box is cleared (the default), and the labor's rate or the labor contract has changed since the labor was planned, Maximo overwrites the Rate field on approval. If the check box is selected, Maximo does not overwrite the Rate field on approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WPL7",
            "required": false,
            "persistent": true,
            "title": "WPL7",
            "remarks": "Extra Field",
            "sameAsAttribute": "JL7",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "WPL8",
            "required": false,
            "persistent": true,
            "title": "WPL8",
            "remarks": "Extra Field",
            "sameAsAttribute": "JL8",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "WPL9",
            "required": false,
            "persistent": true,
            "title": "WPL9",
            "remarks": "Extra Field",
            "sameAsAttribute": "JL9",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DISPLAYTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "DISPLAYTASKID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYWONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "DISPLAYWONUM",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task for the planned craft or labor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "The calculated cost for the craft or labor. Maximo derives the value as: Regular Hours multiplied by the Rate plus any premium pay defined.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WPLABORUID",
            "required": true,
            "persistent": true,
            "title": "WPLABORUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRAFT",
            "required": false,
            "persistent": true,
            "title": "Craft",
            "remarks": "Identifies the craft. You can edit this field if the work order's status allows work plan labor edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "Skill level associated with the craft. You can edit this field if the work order's status allows work plan labor edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": true,
            "title": "Labor Contract",
            "remarks": "Identifies the contract with the vendor that will supply labor resources.You can edit this field if the work order's status allows work plan labor edits. Work order editing rules are set up in the Organizations application.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "QUANTITY",
            "required": true,
            "persistent": true,
            "title": "Quantity",
            "remarks": "The required quantity of individuals",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYRATE",
            "required": false,
            "persistent": false,
            "title": "Rate",
            "remarks": "Hourly pay rate for the labor or craft. Maximo copies this data from the Labor table. If you modify this field, Maximo recalculates the Line Cost field on the Labor subtab, and the Current Estimate Labor Cost in the View Costs dialog box.You can edit this field if the work order's status allows work plan labor edits. Work Order editing rules are set up in the Organizations application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTSIDE",
            "required": false,
            "persistent": false,
            "title": "Outside",
            "remarks": "Specifies if the planned labor is associated with a vendor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": true,
            "title": "Crew Type",
            "remarks": "The type of crew that should perform the work.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "The service center or resource pool that will perform the work.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "APPTREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Appointment Required",
            "remarks": "Indicates if an appointment is required for the labor record. If the labor record is assigned to a task, this value is inherited from the task. If the labor record is not assigned to a task,  this value is inherited from the work record.",
            "sameAsAttribute": "APPTREQUIRED",
            "sameAsObject": "JOBPLAN"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship to the Crew table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABPOS",
            "target": "AMCREWLABPOS",
            "remarks": "Relationship to the AMCREWLABPOS table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWT",
            "target": "AMCREWT",
            "remarks": "Relationship to the Crew Type table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLSQ",
            "target": "AMCREWTOOLSQ",
            "remarks": "Relationship to the AMCREWTOOLSQ table.",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCTCRAFT",
            "target": "AMCTCRAFT",
            "remarks": "Relationship to the Crew Type Crafts table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "AMCTTOOL",
            "target": "AMCTTOOL",
            "remarks": "Relationship to the Crew Type Tools table.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the labor for a given work plan labor. (labor.laborcode=wplabor.laborcode). This resulting set will contain one object.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LABTRANS",
            "target": "LABTRANS",
            "remarks": "Relationship to the LabTrans table, used to find the labor transactions for a given work plan labor. (labtrans.refwo = wplabor.wonum and labtrans.laborcode=wplabor.laborcode). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and laborcode=:laborcode and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship from wplabor to workorder",
            "whereClause": "wonum=:wonum and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WPLABOR",
            "source": "AMCREW",
            "remarks": "Relationship to check if the crew is being used by an active WO",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WPLABOR",
            "source": "AMCREWT",
            "remarks": "Relationship to check if the crew type is being used by a WO.",
            "whereClause": "amcrewtype=:amcrewtype and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WPLABOR",
            "source": "ASSIGNMENT",
            "remarks": "Relationship to the WpLabor table, used to find the work plan labor for a given assignment.\t(Wplabor.wonum=Assignment.wonum and Wplabor.WpLaborId=Assignment.WpLaborId). This resulting set will contain one object.",
            "whereClause": "wonum = :wonum and wplaborid = :wplaborid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPLABORNOTHISTORY",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the wplabor table where laborcode=laborcode, orgid=:orgid and the workorder is a non-history workorder.",
            "whereClause": "laborcode=:laborcode and wonum in (select wonum from workorder where historyflag=:no and orgid=:orgid) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABTRANSWPLABOR",
            "source": "LABTRANS",
            "remarks": "Relationship to the WPLabor table, used to find all work plan labors for a work order. (WPLabor.wonum = Labtrans.refwo). This resulting set will contain zero or more objects.",
            "whereClause": "(wonum=:refwo) and (siteid=:siteid) and (:refwo is not null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WPLABOR",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to wplabor to find the wplabor the created this wmassignment.  Will return 0 or 1 object.",
            "whereClause": "wonum=:wonum and wplaborid=:wplaborid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWALLPLANLABOR",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowAllPlanLaborSet used by UI for display. This is a special MboSet used for displaying all work plan labor related to the entire work hierarchy under a given workorder. (wonum in (select wonum from woancestor where ancestor = :wonum and siteid = :siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from woancestor where ancestor = :wonum and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWPLANLABOR",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowPlanLabor Set used by UI for display. This is a  special MboSet used for displaying the planned labor for a given workorder. (wonum in (select wonum from workorder where wplabor.wonum=workorder.wonum or wplabor.parent=workorder.wonum and wplabor.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "wonum in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REP_PLANLAB",
            "source": "WORKORDER",
            "remarks": "Relationship that returns all planned labor for given Work Order, including the labor for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(wonum=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and wplabor.siteid=w.siteid and wplabor.wonum=w.wonum)) and wplabor.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPLABOR",
            "source": "WORKORDER",
            "remarks": "Relationship to the WPLabor table, used to find all work plan labors for a work order. (WPLabor.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPLABOR_QBE",
            "source": "WORKORDER",
            "remarks": "Relationship from workorder to wplabor for qbe ",
            "whereClause": "exists (select 1 from workorder yy where ((yy.istask = :yes and yy.parent = :wonum ) or ( yy.wonum = :wonum)) and wplabor.wonum = yy.wonum and yy.siteid = :siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}