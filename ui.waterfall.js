var ui = window.ui || {};

ui.WaterPoul = window.ui.WaterPoul || {};

ui.WaterPoul.config = {
    imageRoot: 'http://fmn.rrimg.com/',
    staticRoot: 'http://s.xnimg.cn/',
    cgiRoot: 'http://explore.renren.com/'
}

//用户可以自定义模板的结构
ui.WaterPoul.tmpl = {
    comment: '<li class="clearfix"  id="water_poul_comment_<%=commentid%>">\
					<a href="http://www.renren.com/profile.do?id=<%=id%>" class="feed-module-avatar">\
                        <img title="<%=name%>" alt="<%=name%>" src="<%=headurl%>"></a>\
					<div class="m-avatar-info">\
						<p>\
							<a  href="http://www.renren.com/profile.do?id=<%=id%>" target="_blank" class="name"><%=name%></a>\
							<span class="d-comment"><%=content%></span>\
						</p>\
						<p class="feed-module-time"><%=date%></p>\
					</div>\
				</li>',
    image: '<% for (var i =0;i<data.length;i++) {%>\
                    <div class="zhan-imgbox <%if(i==9) {%> half-img <% } %>">\
					    <img alt="<%=data[i].desc%>" src="<%=data[i].url%>">\
					    <p><%=data[i].desc%></p>\
                        <%if(i==9) {%>\
                            <div class="discovery-bottom"></div>\
                        <% } %>\
				    </div>\
                <% } %>',
    index: '<div class="discovery-layer" id="index_frame_<%=cid%>" data = "{cid:&quot;<%=cid%>&quot;}">\
		            <a href="#" class="index_top_close layer-closed" onclick="return false;" <%if(!XN.Browser.IE6) {%> style="position:fixed;top:10px;left:<%=left%>px" <% } %>>关闭</a>\
                    <div class="discovery-layer-main">\
			            <div class="title-box clearfix">\
				            <%if(followinfo.followUrl) {%>\
                                <div class="title-btn">\
                                    <%if(followinfo.isfollow) {%>\
					                 <a onclick="return false;" class="index_follow no-attention" href="#" fromid="<%=fromid%>" fromtype="<%=fromtype%>">取消关注</a>\
                                    <% } else {%>\
                                        <a onclick="return false;" class="index_follow attention" href="#" fromid="<%=fromid%>" fromtype="<%=fromtype%>">关注</a>\
                                    <% } %>\
				                </div>\
                            <% }%>\
				            <div class="title-main clearfix">\
					            <a href="<%if(fromtype == 20) { %>http://www.renren.com/profile.do?id=<%=fromid%> <% } else{ %> <%=sourceurl%> <% } %>" class="avatar" target="_blank">\
						            <img width="50"  src="<%=fromheadurl%>" onerror="this.src=&quot;http://head.xiaonei.com/photos/0/0/men_tiny.gif&quot;" >\
					            </a>\
					            <div class="title-content clearfix">\
						            <h1><%=title%></h1>\
						            <div class="d-source clearfix">\
							            <span>来自：<a href="<%=fromurl%>" target="_blank"><%=source%></a></span>\
							            <span class="spliter">|</span>\
							            <span><a href="<%=sourceurl%>" target="_blank">原址查看</a></span>\
						            </div>\
					            </div>\
				            </div>\
			            </div>\
			            <div class="layer-content">\
				            <div class="mod-tool-bar">\
					            <div class="mod-btn-box" style="visibility:visible;" id="index_toolbar_<%=cid%>">\
						            <a href="#" onclick="return false;" class="index_top_comment">\
                                        <span class="mod-reply-ico">评论</span>\
                                    </a>\
						            <a href="#" onclick="return false;">\
                                        <span class="mod-share-ico share_new explore_share_div"\
                                        <%if(fromtype==12) { %>\
                                            data-share="{stype:&quot;create_share_zhan&quot;,id:&quot;<%=sid%>&quot;,owner:&quot;<%=ownerid%>&quot;,host:&quot;<%=ownerid%>&quot;}"\
                                         <% } else if(fromtype==15){%>\
                                            data-share="{stype:&quot;create_share_feed&quot;,id:&quot;<%=sid%>&quot;,owner:&quot;<%=ownerid%>&quot;,type:&quot;<%=sname%>&quot;}"\
                                         <% } else if(fromtype==13){%>\
                                            data-share="{stype:&quot;create_share_feed&quot;,id:&quot;<%=sid%>&quot;,owner:&quot;<%=ownerid%>&quot;,type:&quot;forum&quot;}"\
                                         <% } else {%>\
                                            data-share="{stype:&quot;create_share_div&quot;,id:&quot;<%=sid%>&quot;,owner:&quot;<%=hostid%>&quot;,host:&quot;<%=hostid%>&quot;}"\
                                         <% } %>\
                                        >分享</span>\
                                    </a>\
                                    <%if(!islike) {%>\
						            <a href="#" onclick="return false;" class="water_poul_feed_like" data="<%=cid%>" status="0"><span class="mod-like-ico">喜欢</span></a>\
						         <% }else{ %>\
                                        <span class="no-ico-btn water_poul_feed_like"  status="1" data="<%=cid%>" id="water_poul_feed_like_<%=cid%>">已喜欢</span>\
					             <% } %>\
                                </div>\
				            </div>\
                            <%if(type == 1) {%>\
				                <div class="zhan-content" id="index_pic_container_<%=cid%>">\
                                    <%if(picurl.length>9) {%>\
                                        <%for(var i=0;i<10;i++){%>\
					                        <div class="zhan-imgbox <%if(i==9) {%> half-img <% } %>">\
						                        <img alt="<%=picurl[i].desc%>" src="<%=picurl[i].url%>" width="680">\
						                         <%if(i==9) {%>\
                                                        <div class="discovery-bottom"></div>\
                                                    <% } %>\
                                                <p><%=picurl[i].desc%></p>\
					                        </div>\
                                        <% } %>\
                                    <% } else {%>\
                                        <%for(var i=0;i<picurl.length;i++){%>\
					                        <div class="zhan-imgbox ">\
						                        <img alt="<%=picurl[i].desc%>" src="<%=picurl[i].url%>" width="680">\
						                        <p><%=picurl[i].desc%></p>\
					                        </div>\
                                        <% } %>\
                                    <% } %>\
				                </div>\
                                <%if(picurl.length>10) {%>\
                                    <div class="show-more-pic" id="index_pic_showmore_button_<%=cid%>" >\
					                    <a class="d-gray-btn index_pic_showmore" href="#" onclick="return false;" current="1" total="<%=picurl.length%>">\
                                            查看更多图片(<span>10</span>/<%=picurl.length%>)<span class="more-arrow"></span>\
                                        </a>\
				                    </div>\
                                <% } %>\
                            <% } else if(type == 2) {%>\
                                <div class="layer-content">\
				                    <div class="layer-video" id="index_video_container_<%=cid%>" data="<%=swfurl%>">\
                                        <%=ui.WaterPoul.util.embedFlash({width: 608,height: 500, filename:swfurl})%>\
				                    </div>\
				                    <div class="layer-descript"></div>\
			                    </div>\
                            <% } else if(type == 3) {%>\
                                <div class="layer-blog" id="index_blog_container_<%=cid%>"><%=content%></div>\
                            <% } %>\
			            </div>\
		            </div>\
		            <div class="d-layer-module">\
			            <h2>评论 </h2>\
			            <div class="d-layer-comment">\
                            <%if(shareCount>6) { %>\
				                <div class="show-more-box">\
					                <a href="#" onclick="return false;" class="index_showmore_comment" cid="<%=cid%>" total="<%=shareCount%>" current="6">显示较早之前的评论</a>\
				                </div>\
                            <% } %>\
				            <ul class="d-comment-list" id="index_commentlist_<%=cid%>">\
                                <% if(comment.length) {%>\
                                    <%for(var i=(comment.length-1);i>-1;i--) {%>\
					                    <li class="clearfix">\
						                    <a href="http://www.renren.com/profile.do?id=<%=comment[i].userid%>" class="feed-module-avatar">\
                                                <img title="<%=comment[i].name%>" alt="<%=comment[i].name%>" src="<%=comment[i].headurl%>"></a>\
						                    <div class="m-avatar-info">\
							                    <p>\
								                    <a  href="http://www.renren.com/profile.do?id=<%=comment[i].userid%>" target="_blank" class="name"><%=comment[i].name%></a>\
								                    <span class="d-comment"><%=comment[i].content%></span>\
							                    </p>\
							                    <p class="feed-module-time"><%=comment[i].date%></p>\
						                    </div>\
					                    </li>\
                                    <% } %>\
                                <% } %>\
				            </ul>\
				            <div class="d-comment-box">\
					            <div class="clearfix">\
						            <span class="feed-module-avatar">\
							            <img src="<%=USER.pic%>">\
						            </span>\
						            <form class="d-txt-box">\
							            <textarea placeholder="添加回复..." id="index_textarea_<%=cid%>"></textarea>\
							            <span class="d-limit" id="index_wordcount_<%=cid%>">500</span>\
						            </form>\
					            </div>\
					            <div class="m-submit-bar clearfix">\
						            <a class="m-submit-btn" href="#" onclick="return false;" id="index_do_comment_<%=cid%>">发表评论</a>\
						            <label class="d-share-feed"><input type="checkbox" id="index_ishare_<%=cid%>"> 分享到新鲜事</label>\
						            <a style="display:none" class="m-emotion-ico" title="添加表情" href="#" onclick="return false;" id="index_emotion_<%=cid%>">表情</a>\
						            <a style="display:none" class="m-at-ico" title="点名" href="#" onclick="return false;" id="index_metion_<%=cid%>">点名</a>\
					            </div>\
				            </div>\
			            </div>\
		            </div>\
		            <div class="clearfix" style="display:none">\
			            <dl class="d-layer-avatarlist clearfix">\
				            <dt>分享 <%=shareCount%></dt>\
                            <%for(var i=0;i<sharedUsers.length;i++) {%>\
				                <dd>\
					                <a title="<%=sharedUsers[i].name%>" href="http://www.renren.com/<%=sharedUsers[i].userid%>" target="_blank">\
						                <img width="50" title="<%=sharedUsers[i].name%>" alt="<%=sharedUsers[i].name%>" src="<%=sharedUsers[i].headurl%>">\
					                </a>\
				                </dd>\
                            <% } %>\
			            </dl>\
			            <dl class="d-layer-avatarlist d-noborder clearfix">\
				            <dt>喜欢 <%=likeCount%></dt>\
                            <%for(var i=0;i<likedUsers.length;i++) {%>\
				                <dd>\
					                <a title="<%=likedUsers[i].name%>"  href="http://www.renren.com/<%=likedUsers[i].userid%>" target="_blank">\
						                <img width="50" title="<%=likedUsers[i].name%>" alt="<%=likedUsers[i].name%>" src="<%=likedUsers[i].url%>">\
					                </a>\
				                </dd>\
                            <% } %>\
			            </dl>\
		            </div>\
                    <%if(recommend.length) {%>\
		            <div class="d-layer-module">\
			            <h2>猜你喜欢</h2>\
			            <ul class="d-layer-maylike">\
                            <%for(var i=0;i<recommend.length;i++){%>\
				                <li data="{cid:&quot;<%=recommend[i].cid%>&quot;}" class="water_poul_item index_recommend" data="{sid:&quot;<%=recommend[i].sid%>&quot;,cid:&quot;<%=recommend[i].cid%>&quot;}">\
					                <div class="kinds-content show_index">\
						                <a href="#" onclick="return false;">\
							                <img src="<%=recommend[i].picurl%>" alt="<%=recommend[i].title%>">\
						                </a>\
					                </div>\
					                <a href="#" class="show_index" onclick="return false;"><%=ui.WaterPoul.util.stringCut(recommend[i].title,40)%></a>\
				                </li>\
                            <% } %>\
			            </ul>\
		            </div>\
                    <% } %>\
	            </div>',

    feed: '<div class="water_poul_item feed-module" id="water_poul_<%=cid%>" cid="<%=cid%>"  data="{dataIndex:<%=dataIndex%>,sid:&quot;<%=sid%>&quot;,cid:&quot;<%=cid%>&quot;}" isopen="0" style="display:none">\
				<div class="mod-btn-box" id="water_poul_toolbar_<%=cid%>">\
						<a href="#" onclick="return false;" class="water_poul_feed_topcomment"><span class="mod-reply-ico">评论</span></a>\
						<a href="#" onclick="return false;" >\
                            <span class="mod-share-ico share_new explore_share_div" \
                             <%if(from==12) { %>\
                                data-share="{stype:&quot;create_share_zhan&quot;,id:&quot;<%=sid%>&quot;,owner:&quot;<%=ownerid%>&quot;,host:&quot;<%=ownerid%>&quot;}"\
                             <% } else if(from==15){%>\
                                data-share="{stype:&quot;create_share_feed&quot;,id:&quot;<%=sid%>&quot;,owner:&quot;<%=ownerid%>&quot;,type:&quot;<%=sname%>&quot;}"\
                             <% } else if(from==13){%>\
                                data-share="{stype:&quot;create_share_feed&quot;,id:&quot;<%=sid%>&quot;,owner:&quot;<%=ownerid%>&quot;,type:&quot;forum&quot;}"\
                             <% } else {%>\
                                data-share="{stype:&quot;create_share_div&quot;,id:&quot;<%=sid%>&quot;,owner:&quot;<%=hostid%>&quot;,host:&quot;<%=hostid%>&quot;}"\
                             <% } %>\
                         >分享</span></a>\
                        <%if(islike) {%>\
                            <span class="no-ico-btn water_poul_feed_like"  status="1" data="<%=cid%>" id="water_poul_feed_like_<%=cid%>">已喜欢</span>\
				        <%} else {%>\
                            <a href="#" onclick="return false;" class="water_poul_feed_like" status="0" data="<%=cid%>" id="water_poul_feed_like_<%=cid%>"><span class="mod-like-ico">喜欢</span></a>\
                        <% } %>\
			    </div>\
                <div class="feed-module-main">\
                    <%if(type == 1) {%>\
                        <div class="feed-module-picture">\
                            <%if(coverImages.length < 2) {%>\
                                <%if(coverImages.length==1) {%>\
						            <div class="m-one-pic">\
							            <a class="show_index" href="#" onclick="return false;">\
                                            <img onload="this.className += &quot;animate-element fadeIn&quot;;this.style.visibility = &quot;&quot;"  src="<%=coverImages[0].url%>" width="<%=image.w%>" height="<%=parseInt((image.w*coverImages[0].height)/coverImages[0].width,10)%>">\
                                        </a>\
						            </div>\
                                <% } else { %>\
                                    <div class="m-one-pic">\
							            <a class="show_index" href="#" onclick="return false;">\
                                          <img  src="<%=picurl%>" width="<%=image.w%>" height="<%=image.h%>">\
                                        </a>\
						            </div>\
                                <% } %>\
                            <% } else {%>\
                                <div class="more-pic-box">\
							        <ul class="big-pic">\
                                        <%for(var i=0;i<coverImages.length;i++) {%>\
								            <li>\
									            <a href="#" onclick="return false;" class="show_index">\
                                                    <img src="<%=coverImages[i].url%>" width="<%=image.w%>" height="<%=parseInt((image.w*coverImages[i].height)/coverImages[i].width,10)%>">\
                                                </a>\
								            </li>\
                                        <% } %>\
                                        <li></li>\
                                    </ul>\
							        <span class="show_index picture-num">查看全部 (<%=piccount%>张)</span>\
							        <div class="discovery-bottom"></div>\
						        </div>\
                            <% } %>\
						    <div class="show_index module-words">\
							    <%=title%>\
						    </div>\
					    </div>\
                     <% }else if(type==2){ %>\
                        <div class="feed-module-video">\
						    <a class="m-video-title show_index" href="#" onclick="return false"><%=title%></a>\
						    <div class="m-video-pic">\
                                <%if(coverImages.length) {%>\
                                    <a class="show_index" href="#" onclick="return false;">\
								        <img  src="<%=picurl%>" width="<%=image.w%>" height="<%=parseInt((image.w*coverImages[0].height)/coverImages[0].width,10)%>">\
							        </a>\
                                <% } else {%>\
                                    <a class="show_index" href="#" onclick="return false;">\
								        <img  src="<%=picurl%>" width="<%=image.w%>" height="<%=image.h%>">\
							        </a>\
                                <% } %>\
							    <a href="#" onclick="return false;"class="show_index m-play-btn"></a>\
						    </div>\
					    </div>\
                    <% }else if(type==3){ %>\
					    <div class="feed-module-blog">\
						    <h2 class="m-title"><a href="#" class="show_index" onclick="return false;"><%=ui.WaterPoul.util.stringCut(title,35)%></a></h2>\
						    <div class="m-content">\
							    <p class="show_index"><%=summary%><a href="#" onclick="return false;">全文 »</a></p>\
						    </div>\
                            <%if(coverImages.length) {%>\
                                <div class="show_index blog-img">\
							        <img src="<%=coverImages[0].url%>" width="<%=image.w%>" height="<%=parseInt((image.w*coverImages[0].height)/coverImages[0].width,10)%>">\
						        </div>\
                            <% } %>\
					    </div>\
                    <% } %>\
				</div>\
				<div class="feed-module-tool">\
					<span class="water_poul_like_icon m-like-num <%if(islike) {%> m-liked-num <% } %>" id="index_like_icon_<%=cid%>"><%=likecount%></span>\
					<span class="water_poul_feed_topcomment"><%=commentsCount%>评论</span>\
				</div>\
				<div class="feed-module-foot ">\
                    <div class="clearfix">\
					    <a class="feed-module-avatar" <%if(from == 12){%> href="<%=zhanurl%>"  <% } else {%>href="http://www.renren.com/profile.do?id=<%=ownerid%>" <% } %> target="_blank" >\
                            <img src="<%=headurl%>" alt="<%=name%>" title="<%=name%>" width="30" height="30">\
                        </a>\
					    <div class="m-avatar-info">\
						    <p>\
							    <a class="name" title="<%=name%>" <%if(from == 12){%> href="<%=zhanurl%>"  <% } else {%>href="http://www.renren.com/profile.do?id=<%=ownerid%>" <% } %> target="_blank" >\
                                    <%=name%>\
                                </a>\
							    <span>\
                                    <%if(type == 1) {%>\发布相册<% } %>\
                                    <%if(type == 2) {%>\发布视频<% } %>\
                                    <%if(type == 3) {%>\发布日志<% } %>\
                                </span>\
						    </p>\
					    </div>\
                    </div>\
                        <ul class="d-comment-list" id="water_poul_comment_list_<%=cid%>">\
					    <%for(var i= (comments.length-1);i>-1;i--) {%>\
                                <li class="clearfix" id="water_poul_comment_<%=comments[i].commentid%>">\
							        <a class="feed-module-avatar" href="http://www.renren.com/<%=comments[i].userid%>" target="_blank">\
                                            <img src="<%=comments[i].headurl%>" alt="<%=comments[i].name%>" title="<%=comments[i].name%>">\
                                        </a>\
								    <div class="m-avatar-info">\
									    <p>\
										    <a class="name" href="http://www.renren.com/<%=comments[i].userid%>" target="_blank"><%=comments[i].name%></a>\
										    <span class="d-comment"><%=comments[i].content%></span>\
									    </p>\
									    <p class="feed-module-time"><%=comments[i].date%></p>\
								    </div>\
							    </li>\
                                <% } %>\
					    </ul>\
                    <div class="d-comment-box" id="water_poul_comment_container_<%=cid%>" <% if(!comments.length){ %> style="display:none"<% } %>>\
						<div class="clearfix">\
							<span class="feed-module-avatar">\
								<img width="30" height="30" src="<%=USER.pic%>">\
							</span>\
							<form class="d-txt-box">\
								<textarea placeholder="评论一下..." id="water_poul_textarea_<%=cid%>" class="water_poul_textarea"></textarea>\
								<span class="d-limit" id="water_poul_wordcount_<%=cid%>">500</span>\
							</form>\
						</div>\
						<div style="display:none" class="m-submit-bar clearfix" id="water_poul_comment_op_<%=cid%>">\
							<a href="#" onclick="return false;" class="water_poul_comment_button m-submit-btn">评论</a>\
							<a style="display:none" href="#" onclick="return false;" title="添加表情" class="water_poul_emotion m-emotion-ico" id="water_poul_emotion_<%=cid%>"></a>\
							<a style="display:none" href="#" onclick="return false;" title="点名" class="water_poul_at m-at-ico" id="water_poul_metion_<%=cid%>"></a>\
						</div>\
					</div>\
				</div>\
			</div>',

    //空白模版
    zero: ''
}


ui.WaterPoul.closure = function (fn, _$, ns, XN) {

	var jqPub = {
		win: _$(window)
	}


	//配置参数
	ns.config = ns.config || {
		imageRoot: '',
		staticRoot: '',
		cgiRoot: ''
	}

	//模板中的函数调用必须是全局方法，所以这里把模板中的方法注册到全局
	ns.util = {
		stringCut: function (string, max, omet) {
			if (string == undefined) {
				return '';
			}
			var omet = '...';
			if (string.split('').length > max) {
				return string.substring(0, max) + omet;
			}
			return string;
		},

		//嵌入flash的播放器
		embedFlash: function (o) {
			o.flashVars = o.flashVars || 'isAutoPlay=true';
			return '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + (o.width || 320) + '" height="' + (o.height || 240) + '">' +
                        '<param name="movie" value="' + o.filename + '">' +
                        '<param name="quality" value="high">' +
                        '<param name="bgcolor" value="#FFFFFF">' +
                        '<param name="FlashVars" value="' + (o.flashVars || '') + '">' +
                        '<param name="allowNetworking" value="' + (o.allowNetworking || 'all') + '">' +
                        '<param name="allowScriptAccess" value="' + (o.allowScriptAccess || 'sameDomain') + '">' +
                        '<param name="allowFullScreen" value="' + (o.allowFullScreen || 'true') + '">' +
                        '<param name="wmode" value="' + (o.wmode || 'transparent') + '">' +
                        '<embed src="' + o.filename + '" type="application/x-shockwave-flash" ' +
                        'width="' + (o.width || '320') + '" flashvars="' + o.flashVars + '" height="' + (o.height || '240') + '" allowFullScreen="true" wmode="' + (o.wmode || 'transparent') + '" allowNetworking="' + (o.allowNetworking || 'all') + '" allowScriptAccess="' + (o.allowScriptAccess || 'sameDomain') + '"></embed>' +
                   '</object>';
		},
		embedMusic: function (content, className, tagName) {
			if (!XN) {
				return false;
			}
			var tagName = tagName || 'img',
                musicPlayer = document.getElementsByTagName('img'),
                play = function (ele) {
                	var classArray = ele.className.split(/\s+/),
                    musicID = classArray[1];
                	ele.id = 'test123';

                	XN.loadFile(XN.Explore.cfg.STATIC + 'xnapp/common/js/swfobjectv2.2.js', function () {
                		swfobject.embedSWF(XN.Explore.cfg.STATIC + 'xnapp/music/flash/miniplayer/smallPlayer_20110819.swf', ele.id, "190", "33", "10.0.0", "expressInstall.swf", { songId: musicID }, { menu: "false",
                			scale: "noScale",
                			allowFullscreen: "true",
                			allowScriptAccess: "always",
                			wmode: "transparent"
                		}, null, function (e) {
                			if (e.success) {
                				window.radioReady = true;
                			}
                		});
                	});
                };


			for (var i = 0; i < musicPlayer.length; i++) {
				var buf = musicPlayer[i];
				if (buf.className.indexOf('musicbox') > -1) {
					play(buf);
					return false;
				}
			}
		},

		embedVideo: function (content, className, tagName, attr, autoPlayTheFirst, width) {
			if (!XN) {
				return false;
			}
			var _this = this;
			tagName = tagName || 'img';
			attr = attr || 'alt';
			width = width || 600;
			if (isUndefined(autoPlayTheFirst) || (autoPlayTheFirst === null)) autoPlayTheFirst = true;
			//添加视频播放器
			var vs = XN.dom.getElementsByClassName(className, content, tagName),
                flashPlugins = [];

			//优库视频自动播放
			flashPlugins.push(function (flashParams) {
				if (/youku\.com/.test(flashParams.filename)) {
					flashParams.flashVars = 'isAutoPlay=true';
				}
			});

			XN.array.each(vs, function (i, v) {
				var s = v.getAttribute(attr).split(';');
				try {
					if (/[\'\"\(\)]/.test(s[1]) || /t:/.test(s[1])) {
						return;
					}
					var tmp = $element('div');
					var param = {
						'width': width,
						height: parseInt(width / parseFloat(s[0]), 10),
						filename: s[1]
					};



					if (autoPlayTheFirst && i === 0) {
						//html = parseAutoPlay(html);
						XN.array.each(flashPlugins, function (i, v) {
							v && v(param);
						});
					} else {
						//不是第一个视频的时候不处理
						param.flashVars = '';
					}

					var html = _this.embedFlash(param);
					tmp.innerHTML = html;
					v.parentNode.replaceChild(tmp, v);
				}
				catch (e) {
					v.parentNode.replaceChild(document.createTextNode('[播放时出错]'), v);
				}
			});

		},
		plugin: {


			//新的字数统计器
			wordCount: function (textBox, countBox) {
				XN.loadFiles(['http://s.xnimg.cn/n/apps/widget/ui.wordcount.js'], function () {
					new ui.WaterPoul.WordCount({
						countBox: countBox,
						textBox: textBox,
						max: 500
					});
				});
			},

			metionInput: function (domInput) {
				if (XN) {
					object.use('xn.mention', function (exports, xn) {
						xn.mention.Mention.init([{
							obj: domInput,
							ugcId: '',
							ugcType: 'share',
							ownerId: XN.user.id || window.USER.id
						}]);
					});
				}
			},

			metionButton: function (jqButton, jqInput) {
				jqButton.click(function () {

					var toInsertVal = '@';
					jqInput.val(jqInput.val() + toInsertVal);


					//为了出现@
					setTimeout(function () {
						jqInput.focus();
					}, 0);
				});
			},

			//表情扩展
			emotion: function (jqButton, domButton, domInput) {
				if (!XN) {
					return false;
				}
				XN.loadFile('http://s.xnimg.cn/csspro/module/minieditor.css');
				XN.loadFiles(['http://s.xnimg.cn/jspro/xn.ui.emoticons.js'], function () {
					new XN.ui.emoticons({
						input: domInput,
						button: domButton,
						onShowEmoPop: function () {
							//var emoCon = this.emotionsContainer;
							//emoCon.setOffsetY(emoCon.offsetY + XN.event.scrollTop());
						}
					});
				});
			}
		}
	};


	//内置模版对象
	var innerTmpl = ns.tmpl,

	//在没有传递图片的宽高时 通过image对象来获取图片的信息
    getImageInfo = function (ImageObj, callback) {
    	if (ImageObj == null) {
    		callback();
    		return;
    	}

    	if (ImageObj.width) {
    		callback(ImageObj.width, ImageObj.height);
    	} else {
    		setTimeout(function () {
    			getImageInfo(ImageObj, callback);
    		}, 10);
    	}

    }

	//模版引擎
	mstmpl = function (str, data) {
		if (!data) {
			return false;
		}

		var cache = {};
		var _inner = function (str, data) {
			//先判断传入的是否是script的id
			var fn = !/\W/.test(str) ? cache[str] = cache[str] ||
	            mstmpl(document.getElementById(str).innerHTML) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +

	            "with(obj){p.push('" +

	            str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") +
	            "');}return p.join('');");

			return data ? fn(data) : fn;
		};
		return _inner(str, data);
	},

    scrollEngine = {
    	config: {
    		bufferHeight: 600
    	},
    	checkTouchBottom: function () {
    		var endHeight = 550,
            bufferHeight = scrollEngine.bufferHeight,
            _doc = _$(document),
            _st = _doc.scrollTop(),
            p = _st + _$(window).height(),
            p2 = _doc.height();
    		return p >= (p2 - endHeight);
    	}
    },

    toUrlString = function (param) {
    	var stack = [];
    	for (var p in param) {
    		stack.push(p + '=' + encodeURIComponent(param[p]));
    	}
    	return stack.join('&');
    },


	//获取一个数据项的具体数据
    getItemData = function (jqEl, callback, cls) {
    	var callback = callback || function () { },
            cls = cls || 'water_poul_item';
    	if (!jqEl.hasClass(cls)) {
    		jqEl = jqEl.parent();
    		getItemData(jqEl, callback, cls);
    	} else {
    		callback(eval('(' + jqEl.attr('data') + ')'), jqEl);
    	}

    },

	//将背景隐藏或者显示出来
    dom = {
    	disable: function (o) {
    		var o = o || {};
    		var createShadow = function (o) {
    			opacity = o.opacity || 0.9;
    			zIndex = o.zIndex || 2000;
    			var el = document.createElement('div');
    			shadowElement = el;
    			el.id = 'shadow_layer'
    			el.style.position = 'absolute';
    			el.style.top = o.top || (jqPub.win.scrollTop() - 500) + 'px';
    			el.style.left = o.left || 0;
    			el.style.background = '#fff';
    			el.style.zIndex = zIndex;
    			el.style.opacity = opacity;
    			el.style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
    			el.innerHTML = ['<div style="position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:2;height:expression(this.parentNode.offsetHeight);"></div>'].join('');

    			function resize() {
    				el.style.display = 'none';
    				el.style.height = jqPub.win.height() + 1500 + 'px';
    				el.style.width = jqPub.win.width() + 'px';
    				el.style.display = 'block';
    			}

    			//关闭弹层
    			el.onclick = o.onclick || function () { };

    			if (o.width && o.height) {
    				el.style.height = o.height;
    				el.style.width = o.width;
    			} else {
    				if (XN.Browser.IE6) {
    					setTimeout(function () {
    						resize();
    					}, 100);
    				} else {
    					resize();
    				}

    				//遮罩层的resize事件
    				jqPub.win.resize(function (e) {
    					if (shadowElement && shadowElement.style.display != "none") {
    						try {
    							resize();
    						} catch (e) { }
    					}
    				});
    			}
    			document.body.insertBefore(el, document.body.firstChild);
    		}

    		if (document.getElementById('shadow_layer') == null) {
    			createShadow(o);
    		} else {
    			var shadowLayer = _$('#shadow_layer');
    			if (shadowLayer[0].style.display == 'none') {
    				shadowLayer[0].style.top = XN.event.scrollTop() + 'px';
    				shadowLayer[0].onclick = o.onclick || function () { }
    				shadowLayer.show();

    			}
    		}
    	},

    	enable: function (hide) {
    		var layer = _$('#shadow_layer');
    		if (layer.length) {
    			layer.hide();
    		}
    	}
    },

	//喜欢的对象
    Like = function (option) {
    	var option = option || {},
            self = this;

    	_$.extend(this, {
    		cgi: option.cgi || {
    			add: '',
    			remove: ''
    		},
    		delegateCls: option.delegateCls || {
    			add: '',
    			remove: ''
    		},

    		callback: option.callback || function () {

    		}
    	});

    	this.request = function (o) {
    		new XN.NET.xmlhttp({
    			url: o.url,
    			method: 'post',
    			data: toUrlString(o.param),
    			onSuccess: function (d) {
    				try {
    					var data = XN.JSON.parse(d.responseText);
    					if (data.code == 0) {
    						o.callback(data);
    					} else {
    						XN.DO.showError(data.msg);
    					}
    				}
    				catch (e) { }
    			}
    		});
    	}

    	this.delegate = function () {
    		var jqWindow = _$(document);

    		jqWindow.delegate(self.delegateCls.add, 'mouseover', function (e) {
    			var jqEl = _$(this),
                                status = jqEl.attr('status');
    			if (status == 1) {
    				jqEl.html('取消喜欢');
    				jqEl.removeClass('no-ico-btn');
    				jqEl.addClass('cancel-ico-btn');
    			}

    		});

    		jqWindow.delegate(self.delegateCls.add, 'mouseout', function (e) {
    			var jqEl = _$(this),
                    status = jqEl.attr('status');
    			if (status == 1) {
    				jqEl.html('已喜欢');
    				jqEl.addClass('no-ico-btn');
    				jqEl.removeClass('cancel-ico-btn');
    			}
    		});

    		jqWindow.delegate(self.delegateCls.add, 'click', function (e) {

    			var jqEl = _$(this),
                    status = jqEl.attr('status'),
                    cid = jqEl.attr('data'),
                    cgi = (status == 0 ? self.cgi.add : self.cgi.remove);

    			self.request({
    				url: cgi,
    				param: { cid: cid },
    				callback: function () {
    					if (status == '1') {
    						self.callback(jqEl, cid, 0);

    					} else {
    						self.callback(jqEl, cid, 1);
    					};
    				}
    			});
    		});
    	}

    	this.delegate();
    }

	//终端页对象
	PopupIndex = function (option) {
		var option = option || {},
            self = this;

		_$.extend(this, {
			cgi: option.cgi || '',
			param: option.param || {},
			feedContainer: option.feedContainer || {},
			comment: option.comment || {
				cgi: ''
			},

			follow: option.follow || {
				add: '',
				remove: ''
			}
		});

		this.ImagePool = {};

		this.plugin = ns.util.plugin;

		this.jq = {
			feedContainer: _$('#' + this.feedContainer),
			win: _$(window),
			doc: _$(document),
			body: _$('body'),
			indexContainer: _$('#index_container')
		}

		this.setParam = function (key, value) {
			self.param[key] = value;
		}

		this.storage = {};

		this.currentCid = 0;

		this.locker = false;

		this.lock = function () {
			this.locker = true;
		}

		this.resume = function () {
			this.locker = false;
		}

		this.view = {

			scrollBarChange: function (hidden) {
				//IE下的设置和其他浏览器有所不同
				var htmlbody = _$.browser.msie ? document.documentElement : document.body
				if (hidden) {
					//17px是滚动条的宽度 这地方要fixed
					htmlbody.style.cssText = 'overflow:hidden;margin-right:17px';
				} else {
					htmlbody.style.cssText = 'overflow:auto;';
				}
			},

			//展示
			show: function (cid, callback) {
				var callback = callback || function () { };

				//已经打开了一个层时 防止用户点击过快
				if (self.locker) {
					return false;
				}

				this.close();
				self.lock();


				setTimeout(function () {

					var indexJQObejct = _$('#index_frame_' + cid),
                    jqVideoContainer = _$('#index_video_container_' + cid),
                    jqBlogContainer = _$('#index_blog_container_' + cid),
                    jqContainer = self.jq.indexContainer,

					//设置弹层终端页在展开时候的页面样式
                    setLayerStyle = function () {
                    	jqContainer.get(0).style.cssText += 'height:' + self.jq.win.height() + 'px;width:100%;overflow-y:scroll;z-index:2000;position:absolute;top:' + _$(window).scrollTop() + 'px';
                    	jqContainer.show();
                    	jqContainer[0].scrollTop = 0;
                    	self.view.scrollBarChange(true);

                    	//创建一个可以被关闭的蒙版
                    	dom.disable();
                    };

					//如果已经请求过这个终端页
					if (indexJQObejct.length) {
						self.currentCid = cid;

						//视频日志
						if (jqVideoContainer.length) {
							var swfurl = jqVideoContainer.attr('data');
							jqVideoContainer.html(ui.WaterPoul.util.embedFlash({
								width: 608,
								height: 500,
								filename: swfurl
							}));
						}

						//日志页面
						if (jqBlogContainer.length) {
							var id = jqBlogContainer[0].id;
							jqBlogContainer.html(self.storage[cid].content);

							setTimeout(function () {
								ui.WaterPoul.util.embedVideo(id, 'video');
								ui.WaterPoul.util.embedMusic(id, 'music');
							}, 0);
						}

						setLayerStyle();
						indexJQObejct.show();
						self.resume();
						callback();
					} else {
						self.model.getIndexData(function (d) {



							var cid = d.cid,
                                type = d.type;

							//当前展开弹层的cid
							self.currentCid = cid;

							var html = mstmpl(innerTmpl.index, _$.extend({
								left: parseInt(self.jq.win.width() - (self.jq.win.width() - 720) / 2, 10)
							}, d));

							jqContainer.append(html);
							setLayerStyle();

							setTimeout(function () {
								self.event.bindIndexEvent(cid);
								self.resume();
								self.jq.indexContainer.css({
									height: self.jq.win.height() + 'px'
								});

								//如果是日志 就要播放日志的视频和音乐
								if (type == 3) {
									var id = jqContainer[0].id;
									ui.WaterPoul.util.embedVideo(id, 'video');
									ui.WaterPoul.util.embedMusic(id, 'music');

									//缓存本地存储过的数据
									//因为日志中又音乐和视频这样奇怪的东西
									self.storage[cid] = d;
								}
								callback();
							}, 0);
						});
					}
				}, 100);

			},


			close: function () {
				var cid = self.currentCid,
                    indexJQObejct = _$('#index_frame_' + cid),
                    jqVideoContainer = _$('#index_video_container_' + cid),
                    jqBlogContainer = _$('#index_blog_container_' + cid),
                    jqContainer = _$('#index_container');

				//如果有视频 要清除视频播放器 释放资源
				if (jqVideoContainer.length) {
					jqVideoContainer.empty();
				}

				//因为视频中可能有操蛋的视频或者音乐
				if (jqBlogContainer.length) {
					jqBlogContainer.empty();
				}

				//除了隐藏外围容器 还要隐藏内部的元素
				jqContainer.hide();
				if (XN.Browser.IE) {
					indexJQObejct.remove();
				} else {
					indexJQObejct.hide();
					_$('#index_toolbar_' + cid).css({
						position: '',
						left: '0px',
						top: '10px'
					});
				}
				//indexJQObejct.css({ 'height': '0px' });
				self.view.scrollBarChange();
			}
		}

		this.model = {
			request: function (o) {
				if (XN) {
					new XN.NET.xmlhttp({
						url: o.url,
						method: o.method || 'get',
						data: toUrlString(o.param),
						onSuccess: function (d) {
							try {
								var data = XN.JSON.parse(d.responseText);
								if (data.code == 0) {
									o.callback(data);

								} else {
									XN.DO.showError(data.msg);
								}
							}
							catch (e) {
								XN.DO.showError('服务器忙，请重新登录后再试' || e.message);
							}
						}
					});
				} else {
					_$[o.method || 'get'](o.url, o.param, function (d) {
						if (d.code == 0) {
							o.callback(d.data);
						} else {

						}
					}, o.type || 'json');
				}
			},

			getIndexData: function (callback) {
				this.request({
					url: self.cgi,
					param: self.param,
					callback: function (d) {

						//如果照片长度超过了分页的长度 那么就要截取数据
						if (d.data.picurl) {
							if (d.data.picurl.length > 9) {
								self.ImagePool[d.data.cid] = d.data.picurl.slice(10);
							}
						}
						callback(d.data);
					}
				});
			},

			getMoreComment: function (param, callback) {
				this.request({
					url: self.comment.more,
					method: 'get',
					param: param,
					callback: function (d) {
						if (d.code == 0) {
							callback(d);
						} else {

						};
					}
				});
			},

			doComment: function (param, callback) {
				this.request({
					url: self.comment.cgi,
					method: 'post',
					param: param,
					callback: function (d) {
						if (d.code == 0) {
							callback(d);
						} else {
							XN.DO.showError(d.msg);
						};
					}
				});
			},

			follow: function (param, add, callback) {
				this.request({
					url: add ? self.follow.add : self.follow.remove,
					method: 'post',
					param: param,
					callback: function (d) {
						if (d.code == 0) {
							callback(d);
						} else {

						};
					}
				});
			}
		},

        this.indexScollLock = false;

		this.event = {
			bindIndexEvent: function (cid) {
				var dom = self.jq.indexContainer[0];

				self.jq.win.keydown(function (e) {
					if (self.jq.indexContainer.css('dsiplay') != 'none') {
						if (e.which == 40) {
							self.jq.indexContainer[0].scrollTop += 20;
							return false;
						} else if (e.which == 38) {
							self.jq.indexContainer[0].scrollTop -= 20;
							return false;
						} else if (e.which == 32) {
							return false;
						}

					}
				});

				self.jq.indexContainer.scroll(function () {

					var top = dom.scrollTop,
                       jqToolbar = _$('#index_toolbar_' + self.currentCid);
					if (top > 65) {
						jqToolbar.css({
							top: 0,
							left: parseInt((self.jq.win.width() - 715) / 2, 10),
							'position': 'fixed'
						});
					} else {
						jqToolbar.css({
							top: 0,
							left: 10,
							'position': ''
						});
					}
				});


				//终端页评论 
				_$('#index_do_comment_' + cid).click(function () {

					var cid = this.id.split('_').pop(),
                        jqTextarea = _$('#index_textarea_' + cid),
                        text = jqTextarea.val(),
                        isShare = _$('#index_ishare_' + cid)[0].checked;
					if (_$.trim(text) == '') {
						XN.DO.showError('评论内容不能为空');
						return false;
					}

					self.model.doComment({
						share: isShare ? true : false,
						cid: cid,
						body: text
					}, function (d) {
						var html = mstmpl(innerTmpl.comment, d);
						_$('#index_commentlist_' + cid).append(html);

						XN.DO.showMessage('评论成功！', '提示', 1);
						jqTextarea.val('');

					});

				});

				//插件的事件绑定
				self.plugin.wordCount('index_textarea_' + cid, 'index_wordcount_' + cid);
				self.plugin.metionInput($('index_textarea_' + cid));
				self.plugin.metionButton(_$('#index_metion_' + cid), _$('#index_textarea_' + cid));
				self.plugin.emotion(_$('#index_emotion_' + cid), $('index_emotion_' + cid), $('index_textarea_' + cid));
			},

			delegate: function () {


				self.jq.feedContainer.delegate('.water_poul_item', 'mouseover', function () {
					var jqThis = _$(this),
                        cid = jqThis.attr('cid');
					_$('#water_poul_toolbar_' + cid).css({ visibility: 'visible' });
				});

				self.jq.feedContainer.delegate('.water_poul_item', 'mouseout', function () {
					var jqThis = _$(this),
                        cid = jqThis.attr('cid');
					_$('#water_poul_toolbar_' + cid).css({ visibility: 'hidden' });
				});

				self.jq.doc.delegate('.index_showmore_comment', 'click', function () {

					var jqThis = _$(this),
                        limit = 10,
                        offset = jqThis.attr('current'),
                        total = jqThis.attr('total'),
                        cid = jqThis.attr('cid');

					self.model.getMoreComment({
						cid: cid,
						limit: limit,
						offset: offset
					}, function (d) {
						var data = d.comments.reverse(),
                            html = '',
                            jqCommentContainer = _$('#index_commentlist_' + cid),
                            current = parseInt(offset, 10) + limit;


						jqThis.attr('current', current);
						for (var i = 0; i < data.length; i++) {
							data[i].id = data[i].userid;
							html += mstmpl(innerTmpl.comment, data[i]);
						}
						jqCommentContainer.prepend(html);

						if (current > total) {
							jqThis.parent().hide();
						}
					});

				});

				//终端页面的关注操作
				self.jq.doc.delegate('.index_follow', 'click', function () {
					var jqThis = _$(this),
                        fromid = jqThis.attr('fromid'),
                        fromtype = jqThis.attr('fromtype'),
                        isAdd = jqThis.hasClass('attention') ? true : false;

					self.model.follow({
						fromid: fromid,
						fromtype: fromtype
					}, isAdd, function () {
						if (isAdd) {
							jqThis.addClass('no-attention');
							jqThis.removeClass('attention');

						} else {
							jqThis.addClass('attention');
							jqThis.removeClass('no-attention');

						}
					});

				})

				self.jq.doc.delegate('.index_top_close', 'click', function () {
					self.view.close();
					dom.enable();
				});

				//查看更多图片
				self.jq.doc.delegate('.index_pic_showmore', 'click', function () {
					var jqThis = _$(this);
					getItemData(jqThis, function (d) {

						var cid = d.cid,
                            imageData = self.ImagePool[d.cid],
                            imageContainer = _$('#index_pic_container_' + cid),

						//获取下一屏幕的数据
                            insertImageData = imageData.splice(0, 10);
						var html = mstmpl(innerTmpl.image, { data: insertImageData });
						imageContainer.append(html);

						var jqButton = _$('#index_pic_showmore_button_' + cid),
                            curPage = jqThis.attr('current') * 10;

						imageContainer.find('.zhan-imgbox').eq(curPage - 1).removeClass('half-img');

						//没有数据了 就别搞了
						if (!imageData.length) {
							//隐藏查看更多的button

							jqButton.hide();
							try {
								imageContainer.find('.zhan-imgbox').eq(curPage + 10 - 1).removeClass('half-img');
							} catch (ex) {

							}
						} else {
							//更新页码
							jqThis.attr('current', parseInt(curPage, 10) + 1);
						}


					}, 'discovery-layer');
					return false;

				});

				self.jq.doc.delegate('.index_top_comment', 'click', function () {
					getItemData(_$(this), function (d) {
						var commentToTop = _$('#index_textarea_' + d.cid),
                            top = commentToTop.offset().top;
						self.jq.indexContainer[0].scrollTop = (top);
						commentToTop.focus();
					}, 'discovery-layer');
					return false;

				});


			},

			bind: function () {
				//窗口变化的时候 可视区域大小要跟随变化
				self.jq.win.resize(function () {
					if (self.jq.indexContainer.css('display') != 'none') {
						self.jq.indexContainer.css({
							height: self.jq.win.height() + 'px'
						});


						//重新计算吸顶导航
						if (self.jq.indexContainer[0].scrollTop > 65) {
							$('index_toolbar_' + self.currentCid).style.left = parseInt((self.jq.win.width() - 715) / 2, 10) + 'px';
						}

						//重新布局关闭按钮的位置
						if (!XN.Browser.IE6) {
							var closeButton = self.jq.indexContainer.find('.index_top_close'),
                            winWidth = self.jq.win.width() - 17;

							for (var i = 0; i < closeButton.length; i++) {
								closeButton[i].style.left = parseInt(winWidth - (winWidth - 720) / 2, 10) + 'px';
							}
						}
					}
				});

				//点击背景关闭弹层
				self.jq.indexContainer.click(function (e) {
					var triggerElement = e.target;
					if (triggerElement.id == 'index_container') {
						self.view.close();
						dom.enable();
					}
				});
			}
		}

		//事件绑定
		this.event.bind();
		this.event.delegate();
	},

	//瀑布流的原型
    waterPoul = function (option) {

    	//防止不传参数报错
    	var option = option || {},
            self = this;


    	_$.extend(this, {

    		//渲染的容器
    		renderTo: option.renderTo || '',

    		//渲染方式 可以选择insert
    		method: option.method || 'replace',

    		//feed模板
    		feedTmpl: option.feedTmpl || innerTmpl.feed,

    		//零页面模版
    		zeroTmpl: option.zeroTmpl || innerTmpl.zero,

    		//后端接口
    		cgi: option.cgi || {},

    		//后端参数
    		param: option.param || {},

    		//当前的页码
    		currentPage: option.currentPage || 1,

    		//自适应屏幕宽度
    		autoResize: option.autoResize,

    		//使用前端模版渲染
    		useTmpl: true,

    		//第一屏的数据是否异步
    		ansyc: option.ansyc,

    		//如果第一屏的数据异步 那么第一屏的数据需要传递进来
    		syncData: option.syncData || {},

    		syncDataHasmore: option.syncDataHasmore,

    		//制定列宽
    		columnWidth: option.columnWidth || 313,

    		//制定图片的列宽 因为这里需要等比计算图片的高度
    		columnImageWidth: option.columnImageWidth || 200,

    		//制定渲染得列数
    		column: option.column || 3,

    		//数据项之间的间隔 像素为单位
    		space: option.space || {
    			x: 20,
    			y: 20
    		},

    		//是否展示回复框
    		showReplyBox: option.showReplyBox || 'show',

    		//是否自动渲染数据
    		autoRun: true,

    		//终端页的对象实例
    		indexObject: option.indexObject || {},

    		//loading icon的id
    		showLoading: option.showLoading || '',

    		//评论相关的参数
    		comment: option.comment || {

    			//评论接口
    			cgi: ''
    		},

    		exDataPoul: option.exDataPoul || {}

    	});


    	//用于记录当前页面中渲染的数据项是多少
    	//reset页面的时候要更新这个值
    	this.dataIndex = 1;

    	//存储数据的数据池子 
    	this.dataPoul = [];

    	this.currentOpendTextarea = 0;

    	this.lastLineStack = null;

    	this.hasmoreData = true;

    	//当前页面中展示的列数
    	this.currentColumn = null;



    	//填充数据的容器
    	this.jq = {
    		container: _$('#' + this.renderTo),
    		win: _$(window),
    		doc: _$(document),
    		loading: _$('#' + this.showLoading)
    	};

    	//锁机制
    	this.locker = {
    		scroll: false,
    		render: false
    	}

    	//如果选择平铺数据 那么这个地方列数需要自动计算
    	if (this.autoResize) {
    		this.column = Math.floor(jq.win.width() / self.columnWidth);
    		this.currentColumn = this.column;
    	}

    	//初始化数据池
    	for (var i = 0; i < this.column; i++) {
    		this.dataPoul.push({
    			height: 0,
    			item: 0
    		});
    	}




    	for (var i in this.exDataPoul) {
    		this.dataPoul[i] = this.exDataPoul[i];
    	}

    	//扩展位置
    	this.setExDataPoul = function (value) {
    		this.exDataPoul = value;
    	}


    	this.setDataPoul = function (key, value) {
    		this.dataPoul[key] = value
;
    	}

    	//初始化瀑布流
    	this.initial = function () {

    		//初始化第一屏数据的同时 也就完成了滚动事件的捆绑
    		this.view.renderFristData();
    		this.event.delegate();
    	}


    	//类的存取器
    	this.set = function (key, value) {
    		this[key] = value;
    	}

    	this.get = function (key) {
    		return this[key];
    	}

    	this.reset = function (d, callback) {
    		var callback = callback || function () { };

    		//初始化数据池
    		if (self.locker.render) {
    			return false;
    		}

    		this.dataPoul = [];
    		for (var i = 0; i < this.column; i++) {
    			this.dataPoul.push({
    				height: 0,
    				item: 0
    			});
    		}

    		//扩展数据项的放置
    		for (var i in this.exDataPoul) {
    			this.dataPoul[i] = this.exDataPoul[i];
    		}

    		this.currentPage = 1;
    		this.param = d.param;
    		this.hasmoreData = false;
    		this.jq.container.find('.water_poul_item').remove();
    		this.event.releaseScroll();
    		this.view.renderFristData(true);
    		callback();
    	}

    	this.lock = function (type) {
    		self.locker[type] = true;
    	}

    	this.unlock = function (type) {
    		self.locker[type] = false;
    	}


    	this.model = {
    		_request: function (o) {
    			var param = o.param || self.param;
    			if (XN) {
    				new XN.NET.xmlhttp({
    					url: o.url,
    					method: o.method || 'get',
    					data: toUrlString(param),
    					onSuccess: function (d) {
    						try {
    							var data = XN.JSON.parse(d.responseText);
    							if (data.code == 0) {
    								o.callback(data);
    							} else {
    								XN.DO.showError(data.msg);
    							}
    						}
    						catch (e) {
    							XN.DO.showError('服务器忙，请重新登录后再试' || e.message);
    						}
    					}
    				});
    			} else {
    				_$[o.method || 'get'](o.url, o.param, function (d) {
    					if (d.code == 0) {
    						o.callback(d.data);
    					} else {

    					}
    				}, o.type || 'json');
    			}
    		},

    		doComment: function (param, callback) {
    			this._request({
    				url: self.comment.cgi,
    				method: 'post',
    				param: param,
    				callback: function (d) {
    					if (d.code == 0) {
    						callback(d);
    					} else {
    						XN.DO.showError(d.msg);
    					};
    				}
    			})
    		},

    		getFeedData: function (callback, syncData) {
    			var callback = callback || function () { };

    			//如果有同步的数据就先用同步数据
    			if (syncData) {
    				self.hasmoreData = self.syncDataHasmore;
    				callback(syncData);

    				return;
    			}

    			this._request({
    				url: self.cgi,
    				method: 'get',
    				callback: function (d) {
    					self.hasmoreData = d.hasmore;
    					callback(d.data);

    				}
    			});
    		}
    	}

    	this.plugin = ns.util.plugin;

    	this.view = {

    		//遍历所有的数据 并且随即插入
    		reAlignData: function (data, callback) {
    			callback = callback || function () { };
    			self.lock('render');

    			//检查是否返回空数据
    			if (!data.length) {
    				self.unlock('render');
    				callback();
    				return false;
    			}


    			var currentData = data.shift(),
                    imageUrl = currentData.picurl,
    			//有些数据是不包含图片的 这些数据不需要特殊处理
                    imageObject = imageUrl ? new Image() : null,
                    alignData = function () {
                    	setTimeout(function () {
                    		var minIndex = 0,
                                currentItem = _$('#water_poul_' + currentData.cid),
                                minVal = 0,
                                maxVal = 0;
                    		for (var i = 0; i < self.dataPoul.length; i++) {
                    			if (i == 0) {
                    				minVal = self.dataPoul[i].height;
                    			}
                    			if (self.dataPoul[i].height > maxVal) {
                    				maxVal = self.dataPoul[i].height;
                    			}

                    			if (self.dataPoul[i].height < minVal) {
                    				minIndex = i;
                    				minVal = self.dataPoul[i].height;
                    			}
                    		}

                    		//计算当前数据项的放置位置

                    		var left = (minIndex == 0 ? 0 : (minIndex * (self.columnWidth + self.space.x))),
                            top = self.dataPoul[minIndex].height + self.dataPoul[minIndex].item * self.space.y;

                    		//更新数据信息池内的信息



                    		//正确设置这个数据项到应该被排列的位置
                    		currentItem.get(0).style.cssText += ';position:absolute;top:' + top + 'px;left:' + left + 'px';

                    		//记录这条数据被插入的位置
                    		currentItem.data('column', minIndex);
                    		currentItem.fadeIn(120, function () {
                    			height = _$('#water_poul_' + currentData.cid).height();
                    			self.jq.container.css({ height: maxVal + height });
                    			self.dataPoul[minIndex].height += height;
                    			self.dataPoul[minIndex].item++;

                    			//递归调用
                    			self.view.reAlignData(data, callback);

                    		});
                    	}, 0);
                    };

    			if (imageObject != null) {
    				var root = ns.config.imageRoot;
    				if (imageUrl.indexOf('http') < 0) {
    					imageObject.src = root + imageUrl;
    				} else {
    					imageObject.src = imageUrl;
    				}

    			}

    			//如果传了带有尺寸的封面
    			if (currentData.coverImages.length) {
    				if (_$('#water_poul_' + currentData.cid).length) {
    					return false;
    				}

    				html = mstmpl(innerTmpl.feed, _$.extend(currentData, {
    					image: {
    						w: 200,
    						h: 200
    					},
    					dataIndex: self.dataIndex
    				}));
    				self.dataIndex++;
    				self.jq.container.append(html);
    				alignData();

    			} else {
    				getImageInfo(imageObject, function (w, h) {

    					if (!currentData.piccount) {
    						currentData.piccount = 0
    					}
    					if (!currentData.headurl) {
    						currentData.headurl = '';
    					}

    					//单条数据item的模版

    					html = mstmpl(innerTmpl.feed, _$.extend(currentData, {
    						image: {
    							w: self.columnImageWidth,

    							//按照比例缩放这个图片
    							h: parseInt(self.columnImageWidth * h / w, 10)
    						},
    						dataIndex: self.dataIndex
    					}));
    					self.dataIndex++;
    					self.jq.container.append(html);
    					alignData();
    				});
    			}
    		},

    		renderFristData: function (forceAnsyc) {
    			var feedData = self.syncData;

    			//获取第一屏的feed
    			self.model.getFeedData(function (data) {
    				//是否需要请空原来的feed区域
    				if (self.method == 'replace') {
    					self.jq.container.html('');
    				}

    				//重新布局后端传递回来的数据
    				self.view.reAlignData(data, function () {
    					self.param['p'] = self.currentPage;

    					if (self.hasmoreData) {
    						self.event.bindScroll();
    					}
    				});

    			}, forceAnsyc ? null : (self.ansyc ? null : self.syncData));

    		},

    		//滚屏渲染数据的方法
    		renderScrollData: function () {
    			if (scrollEngine.checkTouchBottom()) {
    				self.event.releaseScroll();
    				self.model.getFeedData(function (data) {
    					self.currentPage++;
    					self.param['p'] = self.currentPage;

    					self.view.reAlignData(data, function () {
    						//只有更多数据的时候 才会继续使用滚动事件
    						if (self.hasmoreData) {
    							self.event.bindScroll();
    						}
    					});

    				});
    			} else {
    				return;
    			}
    		},

    		//渲染评论框
    		//close标记是关闭还是打开评论框
    		renderCommentBar: function (obj, close) {
    			var currentElement = _$(obj);
    			getItemData(currentElement, function (d, jqParent) {
    				var cid = d.cid,
                        jqOpContainer = _$('#water_poul_comment_op_' + cid),
                        jqCommentContainer = _$('#water_poul_comment_container_' + cid),
                        left = parseInt(jqParent.css('left'), 10),
                        top = parseInt(jqParent.css('top'), 10),
                        fixHeight = 40,

    				//获取当前item所在的列
                        column = jqParent.data('column');

    				//是否是关闭评论条
    				if (close) {
    					fixHeight = -fixHeight;
    					jqOpContainer.hide();
    				} else {
    					if (jqOpContainer.css('display') != 'none') {
    						return false;
    					}

    					//没有任何评论的情况下 
    					//默认的框 一起收起来
    					if (jqCommentContainer.css('display') == 'none') {
    						jqCommentContainer.show();
    						fixHeight = 90;
    					}

    					jqOpContainer.show();
    					_$('#water_poul_textarea_' + cid).focus();

    					//只有事件没有被绑定的时候 才会被绑定
    					if (jqParent.data('event') != '1') {
    						//@功能的绑定
    						try {
    							self.plugin.wordCount('water_poul_textarea_' + cid, 'water_poul_wordcount_' + cid);
    							self.plugin.metionInput($('water_poul_textarea_' + cid));
    							self.plugin.metionButton(_$('#water_poul_metion_' + cid), _$('#water_poul_textarea_' + cid));
    							self.plugin.emotion(_$('#water_poul_emotion_' + cid), $('water_poul_emotion_' + cid), $('water_poul_textarea_' + cid));
    							jqParent.data('event', '1');
    						} catch (ex) { }
    					}
    				}

    				//更新存储了列高的数据池子
    				self.dataPoul[column].height += fixHeight;
    				setTimeout(function () {

    					var jqFindElement = self.jq.container.find('.water_poul_item'),
                            l = jqFindElement.length;

    					for (var i = 1; i < l; i++) {
    						var cur = jqFindElement[i];
    						if (parseInt(cur.style.left, 10) == left && parseInt(cur.style.top, 10) > top) {
    							cur.style.top = parseInt(cur.style.top, 10) + fixHeight + 'px';
    						}
    					}
    				}, 0);
    			});
    		},

    		//feed加载时候 给出用户提示
    		renderFeedItemLoading: function (data, jqLayer) {
    			var muPics = data,
                    jqPics = _$(muPics),
                    height = jqPics.height(),
                    width = 200,
                    offset = jqPics.offset(),
                    iconTop = parseInt((height - 18) / 2, 10);


    			//如果存在蒙版 就不要再创建新的蒙版了
    			if (jqLayer.length) {

    				jqLayer.css({
    					width: width + 'px',
    					height: height + 'px',
    					left: offset.left,
    					top: offset.top
    				});

    				_$('#show_loading_img').css({
    					'margin-top': iconTop
    				});

    				jqLayer.show();
    			} else {
    				var shadowLayer = document.createElement('div');
    				shadowLayer.id = 'resource_loading_layer';
    				shadowLayer.style.cssText = 'margin:0 auto;text-align:center;background-color:#fff;display:none;position:absolute;top:' + offset.top + 'px;left:' + offset.left + 'px;width:' + width + 'px;height:' + height + 'px';
    				shadowLayer.innerHTML = '<img id="show_loading_img" src="http://a.xnimg.cn/n/apps/discovery/images/renren-loading-big.gif" style="margin-top:' + iconTop + 'px">';
    				document.body.appendChild(shadowLayer);

    				setTimeout(function () {
    					jqLayer = _$('#resource_loading_layer');
    					jqLayer.css({ 'opacity': 0.3 });
    					jqLayer.show();
    				}, 0);
    			}
    		},

    		renderOneComment: function (d, cid) {
    			var html = mstmpl(innerTmpl.comment, d),
                    jqCommentList = _$('#water_poul_comment_list_' + cid);
    			if (!jqCommentList.length) {
    				return false;
    			}
    			jqCommentList.append(html);

    			setTimeout(function () {
    				//22是这个元素的外边距总和 计算高度的时候 这部分内容是不会被计算的
    				var fixHeight = _$('#water_poul_comment_' + d.commentid).height() + 22;

    				getItemData(jqCommentList, function (d, jqParent) {
    					var left = parseInt(jqParent.css('left'), 10),
                            top = parseInt(jqParent.css('top'), 10),
                            jqFindElement = self.jq.container.find('.water_poul_item'),
                            l = jqFindElement.length;

    					for (var i = 1; i < l; i++) {
    						var cur = jqFindElement[i];
    						if (parseInt(cur.style.left, 10) == left && parseInt(cur.style.top, 10) > top) {
    							cur.style.top = parseInt(cur.style.top, 10) + fixHeight + 'px';
    						}
    					}

    				});
    			}, 0);

    		}
    	}

    	this.event = {
    		autoResize: function () {
    			self.jq.win.resize(function () {
    				debugger;
    			});
    		},

    		bindScroll: function () {
    			self.jq.win.bind('scroll', self.view.renderScrollData);
    		},

    		//释放一个滚屏feed的事件邦定
    		releaseScroll: function () {
    			self.jq.win.unbind('scroll', self.view.renderScrollData);
    		},

    		//瀑布流相关的时间代理机制 
    		delegate: function () {

    			//所谓的喜欢的联动效果
    			self.jq.doc.delegate('.water_poul_like_icon', 'click', function () {
    				var currentElement = _$(this);
    				getItemData(currentElement, function (d, jqEl) {
    					var cid = d.cid;

    					//使用事件触发更简单一些
    					_$('#water_poul_feed_like_' + cid).trigger('click');
    				});
    				UGC.Network.ping.clickStream('402', '109', 'feed.like.icon');
    			});

    			//评论框聚焦之后的交互
    			//如果是已经有评论的时候 这个事件才有效果
    			self.jq.doc.delegate('.water_poul_textarea', 'focus', function () {

    				//页面在重新排布的时候 不能加入评论
    				if (self.locker.render) {
    					return false;
    				}
    				self.view.renderCommentBar(this, false);
    				UGC.Network.ping.clickStream('402', '110', 'feed.textarea.focus');
    			});

    			//列表页面item上面的评论按钮事件
    			self.jq.doc.delegate('.water_poul_feed_topcomment', 'click', function () {
    				if (self.locker.render) {
    					return false;
    				}

    				var jqThis = _$(this),
                        isShow = jqThis.data('isshow');

    				if (isShow == '1') {
    					self.view.renderCommentBar(this, true);
    					jqThis.data('isshow', '0');
    				} else {
    					self.view.renderCommentBar(this, false);
    					jqThis.data('isshow', '1');
    				}
    				UGC.Network.ping.clickStream('402', '111', 'feed.comment.top');
    			});


    			//展示一个终端页的事件代理
    			self.jq.doc.delegate('.show_index', 'click', function () {
    				var currentElement = _$(this);
    				getItemData(currentElement, function (d, jqEl) {
    					var pics = jqEl.find('.more-pic-box'),
                            pic = jqEl.find('.m-one-pic'),
                            video = jqEl.find('.m-video-pic'),
                            blog = jqEl.find('.feed-module-blog'),
                            jqLayer = _$('#resource_loading_layer'),
                            infoPic = null;

    					//如果是多图的情况
    					if (pics.length) {
    						infoPic = pics[0];
    					} else if (video.length) {
    						//视频
    						infoPic = video[0];
    					} else if (pic.length) {
    						//单图
    						infoPic = pic[0];
    					} else if (blog.length) {
    						//日志
    						infoPic = blog[0];
    					}
    					try {
    						self.view.renderFeedItemLoading(infoPic, jqLayer);
    					} catch (ex) {

    					}

    					var cid = d.cid;
    					self.indexObject.setParam('cid', cid);
    					setTimeout(function () {
    						self.indexObject.view.show(cid, function () {
    							try {
    								//终端页面已经打开了 这个时候 可以关闭loading
    								//这里必须重新取这个元素 为什么？自己想.
    								_$('#resource_loading_layer').hide();
    							} catch (ex) { }
    						});
    					}, 0);

    				});

    			});

    			//在列表页面提交评论的事件注册
    			self.jq.doc.delegate('.water_poul_comment_button', 'click', function () {
    				var currentElement = _$(this);
    				getItemData(currentElement, function (d) {

    					var cid = d.cid,
                            jqTextarea = _$('#water_poul_textarea_' + cid),
                            jqWordCount = _$('#water_poul_wordcount_' + cid),
                            textVal = jqTextarea.val();
    					if (_$.trim(textVal) == '' || textVal.split('').length > 500) {
    						return false;
    					}
    					self.model.doComment({
    						share: false,
    						body: textVal,
    						cid: cid
    					}, function (d) {
    						XN.DO.showMessage('评论成功！', '提示', 1);

    						//动态加入一个评论
    						if (cid) {
    							self.view.renderOneComment(d, cid);
    						}
    						//清空回复框
    						jqTextarea.val('');
    						jqWordCount.text('500');
    					});
    				});
    			});
    			UGC.Network.ping.clickStream('402', '112', 'feed.do.comment');
    		}
    	}


    	if (this.autoRun) {
    		this.initial();
    	}

    	if (this.autoResize) {
    		this.event.autoResize();
    	}

    }

	return {
		feed: waterPoul,
		index: PopupIndex,
		like: Like
	};
}

//瀑布流的调用对象
//你要知道base是多么愚蠢的一个库,但是为了共和你丫还是要用,你妈污染了全局_$是搞毛啊
ui.WaterPoul.clazz = ui.WaterPoul.closure(ui.WaterPoul, window.jQuery || {}, window.ui.WaterPoul || {}, window.XN || null);
