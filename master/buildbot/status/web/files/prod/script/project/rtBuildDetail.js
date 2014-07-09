define(["jquery","realtimePages","helpers","handlebars","mustache","text!templates/build.handlebars","text!templates/builders.mustache","timeElements","popup"],function(e,t,s,a,i,r,l,n,o){var u,c=Handlebars.compile(r),d=!1,p=!1;Handlebars.registerHelper("buildCSSClass",function(e){return s.getCssClassFromStatus(e)});var f={updateArtifacts:function(t){var s,a=e("#artifacts-js").empty(),i={},r={};e.each(t.steps,function(t,s){void 0!==s.urls&&e.each(s.urls,function(e,t){"string"==typeof t&&(i[e]=t)})}),e.each(t.logs,function(e,t){2===t.length&&(t[1].indexOf(".xml")>-1||t[1].indexOf(".html")>-1)&&(r[t[0]]=t[1])}),void 0===i||0===Object.keys(i).length?a.html("No artifacts"):(s='<a class="artifact-popup artifacts-js more-info" href="#">Artifacts ({0})&nbsp;</a>'.format(Object.keys(i).length),a.html(s),o.initArtifacts(i,a.find(".artifact-popup"))),Object.keys(r).length>0&&(s="<li>Test Results</li>",e.each(r,function(e,t){s+='<li class="s-logs-js"><a href="{0}">{1}</a></li>'.format(t,e)}),s=e("<ul/>").addClass("tests-summary-list list-unstyled").html(s),a.append(s))}};return u={init:function(){var a=t.defaultRealtimeFunctions();if(a.build=u.processBuildDetailPage,t.initRealtime(a),n.setHeartbeat(1e3),""!==window.location.search){var i=e(".top");s.codeBaseBranchOverview(i)}e(".popup-btn-js-2").click(function(t){t.preventDefault();var s=e(t.target),a=s.next(".more-info-box-js").html(),i=e("body"),r=e("<div/>").popup({title:"",html:a,destroyAfter:!0});i.append(r)})},processBuildDetailPage:function(t){var s=Object.keys(t);1===s.length&&(t=t[s[0]]);var a=t.times[0],i=t.times[1],r=null!==i,l=t.eta;u.refreshIfRequired(r),u.processBuildResult(t,a,l,r),u.processSteps(t),f.updateArtifacts(t),null===i&&n.addElapsedElem(e("#elapsedTimeJs"),a),n.updateTimeObjects()},processBuildResult:function(t,a,r,o){var u=e("#buildResult");n.clearTimeObjects(u);var d="";0!==r&&(d=i.render(l,{progressBar:!0,etaStart:a,etaCurrent:r}));var p={buildResults:!0,b:t,buildIsFinished:o,progressBar:d},f=c(p);u.html(f);var m=u.find(".percent-outer-js");m.addClass("build-detail-progress"),s.delegateToProgressBar(m)},processSteps:function(t){console.log(t);var a="",i=e("#stepList"),r=1;e.each(t.steps,function(t,i){if(i.hidden)return!0;var l=i.isStarted,n=i.isFinished,o=i.results[0];l?l&&!n&&(o=s.cssClassesEnum.RUNNING):o=s.cssClassesEnum.NOT_STARTED,e.each(i.urls,function(t,s){void 0!==s.url&&(i.hasDependency=!0),e.each(this,function(e,t){0===t&&void 0!=t&&(i.hasZero=!0)})});var u=s.getCssClassFromStatus(o),d=i.times[0],p=i.times[1],f=s.getTime(d,p),m={step:!0,index:r,stepStarted:i.isStarted,run_time:f,css_class:u,s:i,url:i.url};return a+=c(m),r+=1,!0}),i.html(a)},refreshIfRequired:function(e){!p&&d&&e&&(window.location=window.location+"#finished",window.location.reload()),p===!1&&(p=e),d=!0}}});
//# sourceMappingURL=rtBuildDetail.js.map