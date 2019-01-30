mos = {
    "objectName": "ALNDOMAIN",
    "className": "psdi.app.system.ALNValueSet",
    "description": "Alpha numeric type of domain",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ALNDOMAINID",
    "primaryKeyColumns": [
        "DOMAINID",
        "VALUE",
        "SITEID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "ALNDOMAIN",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "ALN Domain Details",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ALNDOMAIN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ALNDOMAIN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DOMAINID",
            "required": true,
            "persistent": true,
            "title": "Domain",
            "remarks": "Identifier of the domain",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Value of the domain",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Value description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifier of the site for which the value is specified",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifier of the organization for which the value is specified",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ALNDOMAINID",
            "required": true,
            "persistent": true,
            "title": "ALNDOMAINID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUEID",
            "required": true,
            "persistent": true,
            "title": "Value ID",
            "remarks": "System generated unique identifier of the value in a domain, internal and cannot be modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXDOMAIN",
            "target": "MAXDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'ALN')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'ALN')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "target": "MAXDOMVALCOND",
            "remarks": "Relationship from ALNDOMAIN to MAXDOMVALCOND",
            "whereClause": "domainid = :domainid and valueid = :valueid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PWHINTDOMAIN",
            "source": "ADDUSER",
            "remarks": "MaxUser to ALNDomain for PWHintQuestion",
            "whereClause": "domainid = 'PWHINTQUESTION' and value = :pwhintquestion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHAR_OBSERV_DESC",
            "source": "CHARPOINTACTION",
            "remarks": "Relationship to alndomain table, used to find description for the CharPointAction's observation value.  (domainid=:domainid and value=:value and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) ).  The resulting set will contain one object",
            "whereClause": "domainid=:domainid and value=:value and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALNDOMAIN",
            "source": "LABTRANS",
            "remarks": "Relationship to the alndomain table where values are a skilllevel. This will return 0 or more objects.",
            "whereClause": "domainid = 'SKILLLEVEL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALNDOMAINVALUE",
            "source": "MAXDOMAIN",
            "remarks": "Relationship to ALNValue (alndomainvalue.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'ALN')). If this is an ALN domain, the result set will contain one or more objects.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BIDIEXTSYS",
            "source": "MAXEXTSYSTEM",
            "remarks": "Bidi configuration for an external system",
            "whereClause": "domainid='BIDICONFIG' and value=:bidiconfig",
            "cardinality": null
        },
        {
            "name": "BIDICONFIG",
            "source": "MAXIFACEINVOKE",
            "remarks": "Bidi Configration for Invokation Channel",
            "whereClause": "domainid='BIDICONFIG' and value=:bidiconfig",
            "cardinality": null
        },
        {
            "name": "ALNDOMAIN",
            "source": "MAXLICCRONTASK",
            "remarks": "Relationship from MAXLICCRONTASK to ALNDOMAIN table.",
            "whereClause": "domainid='LICTIMEPERIOD' and value=:TIMEPERIOD ",
            "cardinality": null
        },
        {
            "name": "ALNDOMAIN",
            "source": "MAXLICENSE",
            "remarks": "Relationship from MAXLICENSE to ALNDOMAIN table.",
            "whereClause": "domainid='LICMETRICTYPE' and value=:LICMETRICTYPE ",
            "cardinality": null
        },
        {
            "name": "MAXLICUSGVARSTD",
            "source": "MAXLICENSE",
            "remarks": "Relationship from MAXLICENSE to ALNDOMAIN table.",
            "whereClause": "domainid='LICUSAGESTATUS' and value=(select usagestatus from maxlicusgvar where licensenum=:licensenum and islatest=1)",
            "cardinality": null
        },
        {
            "name": "PWHINTDOMAIN",
            "source": "MAXUSER",
            "remarks": "MaxUser to ALNDomain for PWHintQuestion",
            "whereClause": "domainid = 'PWHINTQUESTION' and value = :pwhintquestion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OBSERV_DESC",
            "source": "MEASUREMENT",
            "remarks": "Relationship to alndomain table, used to find the description for the Measurement's observation value.  (domainid=:domainid and value=:observation and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) ).  The resulting set will contain one object",
            "whereClause": "domainid=:domainid and value=:observation and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PWHINTDOMAIN",
            "source": "MYPROFILECHNGEPW",
            "remarks": "MaxUser to ALNDomain for PWHintQuestion",
            "whereClause": "domainid='PWHINTQUESTION' and value=:pwhintquestion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALNDOMAIN",
            "source": "OSLCINTERACTION",
            "remarks": "Relation to get ALN Domain Description Name. It will return one row.",
            "whereClause": "domainid='OSLCINTTYPE' and value=:interactiontype",
            "cardinality": null
        },
        {
            "name": "LOCALE",
            "source": "PERSON",
            "remarks": "Relationship from Person to Alndomain to get the description of locale.",
            "whereClause": "domainid='LOCALE' and value=:locale",
            "cardinality": null
        },
        {
            "name": "CALTYPE",
            "source": "PERSON",
            "remarks": "Relationship from Person to CALTYPE domain to get calendar type description",
            "whereClause": "domainid='CALTYPE' and value=:caltype",
            "cardinality": null
        },
        {
            "name": "PLUSCASSETMODEL",
            "source": "PLUSCTEMPLATE",
            "remarks": "description of specified pluscmodel attribute",
            "whereClause": "domainid = 'PLUSCASSETMODEL' and value = :PLUSCMODEL",
            "cardinality": null
        },
        {
            "name": "PLUSCCONDITION",
            "source": "PLUSCTEMPLATE",
            "remarks": "description of specified plusccondition attribute",
            "whereClause": "domainid = 'PLUSCCONDITION' and value = :PLUSCCONDITION",
            "cardinality": null
        },
        {
            "name": "USAGE",
            "source": "PLUSCTEMPLATE",
            "remarks": "description of specified usage attribute",
            "whereClause": "domainid = 'USAGE' and value = :USAGE",
            "cardinality": null
        },
        {
            "name": "ALNDOMAIN",
            "source": "REPORTPARAMETER",
            "remarks": "Relationship from REPORTPARAMETER to ALNDOMAIN",
            "whereClause": "domainid='REPORTSCHDISP' and value=:SCHEDULEDISP",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALNDOMAIN",
            "source": "REPORTPROCSCHED",
            "remarks": "Relation from REPORTPROCRESERVE to ALNDOMAIN",
            "whereClause": "domainid='DAYSOFWEEK' and value=:day",
            "cardinality": null
        },
        {
            "name": "ALNDOMAIN",
            "source": "REPORTSCHED",
            "remarks": "Relationship from REPORTSCHED to ALNDOMAIN",
            "whereClause": "domainid='REPORTSCHEDTYPE' and value=:type",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALNDOMAIN2",
            "source": "REPORTSCHED",
            "remarks": "Relationship from REPORTSCHED to ALNDOMAIN",
            "whereClause": "domainid='REPORTSCHDISP' and value=:SCHEDULEDISP",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COUNTRY",
            "source": "SERVICEADDRESS",
            "remarks": "Country domain value for Service Address",
            "whereClause": "domainid = 'COUNTRYCODES' and value = :country",
            "cardinality": null
        },
        {
            "name": "STADDRSTTYPE",
            "source": "SERVICEADDRESS",
            "remarks": "Street Type domain value for Service Address",
            "whereClause": "domainid = 'STREETTYPE' and value = :staddrsttype",
            "cardinality": null
        },
        {
            "name": "STATEPROVINCE",
            "source": "SERVICEADDRESS",
            "remarks": "State / Province domain value for Service Address",
            "whereClause": "domainid = 'STATEPROVINCE' and value = :stateprovince",
            "cardinality": null
        },
        {
            "name": "ALNDOMAIN",
            "source": "SKDPROJECTEMWO",
            "remarks": "Relationship from SKDPROJECTEMWO to ALNDOMAIN.",
            "whereClause": "domainid='REPORTSCHEDTYPE' and value=:scheduletype",
            "cardinality": null
        },
        {
            "name": "ALNDOMAIN",
            "source": "SKDPROJECTSCENARIO",
            "remarks": "Relationship from SKDPROJECTSCENARIO to ALNDOMAIN.",
            "whereClause": "domainid='REPORTSCHEDTYPE' and value=:scheduletype",
            "cardinality": null
        },
        {
            "name": "TAXSOURCE",
            "source": "TAXORDER",
            "remarks": "d",
            "whereClause": "domainid='TAXSOURCE' and value=:tablename",
            "cardinality": null
        },
        {
            "name": "COUNTRY",
            "source": "TKSERVICEADDRESS",
            "remarks": "Country domain value for Service Address",
            "whereClause": "domainid = 'COUNTRYCODES' and value = :country",
            "cardinality": null
        },
        {
            "name": "STADDRSTTYPE",
            "source": "TKSERVICEADDRESS",
            "remarks": "Street Type domain value for Service Address",
            "whereClause": "domainid = 'STREETTYPE' and value = :staddrsttype",
            "cardinality": null
        },
        {
            "name": "STATEPROVINCE",
            "source": "TKSERVICEADDRESS",
            "remarks": "State / Province domain value for Service Address",
            "whereClause": "domainid = 'STATEPROVINCE' and value = :stateprovince",
            "cardinality": null
        },
        {
            "name": "COUNTRY",
            "source": "WOSERVICEADDRESS",
            "remarks": "Country domain value for Service Address",
            "whereClause": "domainid = 'COUNTRYCODES' and value = :country",
            "cardinality": null
        },
        {
            "name": "STADDRSTTYPE",
            "source": "WOSERVICEADDRESS",
            "remarks": "Street Type domain value for Service Address",
            "whereClause": "domainid = 'STREETTYPE' and value = :staddrsttype",
            "cardinality": null
        },
        {
            "name": "STATEPROVINCE",
            "source": "WOSERVICEADDRESS",
            "remarks": "State / Province domain value for Service Address",
            "whereClause": "domainid = 'STATEPROVINCE' and value = :stateprovince",
            "cardinality": null
        }
    ]
}