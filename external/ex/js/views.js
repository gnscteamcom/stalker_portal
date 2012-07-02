var views={
        'loading':{
            'tag':'div',
            'attrs':{
                'id':'page_loading'
            },
            'child':[
                {
                    'tag':'div',
                    'attrs':{
                        'class':'innerbox'
                    },
                    'child':[
                        {
                            'tag':'div',
                            'attrs':{
                                'html':'{$loading$}'
                            }
                        }
                    ]
                }
            ]
        },
        'home':{
            'tag':'div',
            'attrs':{
                'id':'page_home'
            },
            'child':[
                {
                    'tag':'div',
                    'attrs':{
                        'class':'inner_box'
                    },
                    'child':[
                     	{
                            'tag':'div',
                            'attrs':{
                                'id':'button_music',
                                'html':'{$cat_music$}'
                            }
                        },
                        {
                            'tag':'div',
                            'attrs':{
                                'id':'button_video',
                                'html':'{$cat_video$}',
                                'class':'act'
                                	
                            }
                        },
                        {
                            'tag':'div',
                            'attrs':{
                                'id':'button_images',
                                'html':'{$cat_images$}'
                            }
                        }
                            
                    ]
                },
                {
                    'tag':'div',
                    'attrs':{
                        'class':'inner_box2'
                    },
                    'child':[
                        {
	                        'tag':'div',
	                        'attrs':{
	                            'id':'button_search',
	                            'html':'{$cat_search$}'
	                        }
                        }
                    ]
                },
            ]
        },
        'main':{
            'tag':'div',
            'attrs':{
                'id':'page_main'
            },
            'child':[
				{
				    'tag':'div',
				    'attrs':{
				        'id':'header'
				    },
                    'child':[
	                     {
	                    	 'tag':'div',
	                         'attrs':{
	                             'id':'navigation',
	                             'html':''
	                         },
	                         'child':[
          	                     {
          	                    	'tag':'span',
	       	                         'attrs':{
	       	                             'class':'first',
	       	                             'html':''
	       	                         },
          	                     },
          	                     {
           	                    	'tag':'span',
 	       	                         'attrs':{
 	       	                             'class':'second',
 	       	                             'html':''
 	       	                         },
           	                     }
      	                     ]
	                     }
                    ]
				
				},
				{
                    'tag':'div',
                    'attrs':{
                        'id':'list'
                    }
                },
                {
                    'tag':'div',
                    'attrs':{
                        'class':'pages_info'
                    },
                    'child':[
                         {
							'tag':'span',
							'attrs':{
								'html':'{$list_page$}'
							}
                         },
                         {
 							'tag':'strong',
 							'attrs':{
 								'id':'list_page',
 								'html':'0'
 							}
                         },
                         {
  							'tag':'span',
  							'attrs':{
  								'html':' {$list_from$} '
  							}
                         },
                         {
   							'tag':'strong',
   							'attrs':{
   								'id':'list_pages_count',
   								'html':'0'
   							}
                         },
                         {
							'tag':'span',
							'attrs':{
								'html':'. {$list_fined$} '
							}
                         },
                         {
 							'tag':'strong',
							'attrs':{
								'id':'list_items_count',
								'html':'0'
							}                              
                         },
                         {
							'tag':'span',
							'attrs':{
								'html':' {$list_records$}.'
							}
                         }
                    ]
                }
            ]
        },
        'main_s':{
            'tag':'div',
            'attrs':{
                'id':'page_main_s'
            },
            'child':[
				{
				    'tag':'div',
				    'attrs':{
				        'id':'header'
				    },
                    'child':[
	                     {
	                    	 'tag':'div',
	                         'attrs':{
	                             'id':'navigation_s',
	                             'html':''
	                         },
	                         'child':[
          	                     {
          	                    	'tag':'span',
	       	                         'attrs':{
	       	                             'class':'first',
	       	                             'html':''
	       	                         },
          	                     },
          	                     {
           	                    	'tag':'span',
 	       	                         'attrs':{
 	       	                             'class':'second',
 	       	                             'html':''
 	       	                         },
           	                     }
      	                     ]
	                     }
                    ]      
		},
                {'tag':'div',
                    'attrs':{
                        'id':'info_head'},
                    'child':[
                    {
                        'tag':'div',
                        'attrs':{
                            'class':'h_img'
                        },
                        'child':[
                        {
                            'tag':'img',
                            'attrs':{
                                'src':''
                            }
                        }
                      ]
                    },
                    {
                        'tag':'div',
                        'attrs':{
                            'class':'h_text'
                        }
                      },
                    {
                        'tag':'div',
                        'attrs':{
                            'class':'h_text_n'
                        }
                      }
                    ]
                },
		{
                    'tag':'div',
                    'attrs':{
                        'id':'list_s'
                    }
                },
                {
                    'tag':'div',
                    'attrs':{
                        'class':'pages_info'
                    },
                    'child':[
                         {
							'tag':'span',
							'attrs':{
								'html':'{$list_page$}'
							}
                         },
                         {
 							'tag':'strong',
 							'attrs':{
 								'id':'list_page_s',
 								'html':'0'
 							}
                         },
                         {
  							'tag':'span',
  							'attrs':{
  								'html':' {$list_from$} '
  							}
                         },
                         {
   							'tag':'strong',
   							'attrs':{
   								'id':'list_pages_count_s',
   								'html':'...'
   							}
                         },
                         {
							'tag':'span',
							'attrs':{
								'html':'&nbsp&nbsp{$list_fined$} '
							}
                         },
                         {
 							'tag':'strong',
							'attrs':{
								'id':'list_items_count_s',
								'html':'0'
							}                              
                         },
                         { 
							'tag':'span',
							'attrs':{
								'html':' {$list_records_s$}'
							}
                         },
                         {
 							'tag':'strong',
							'attrs':{								
								'html':' ...'
							}
                         }
                    ]
                }
            ]
        },
        
        'searchLine':{
            'tag':'div',
            'attrs':{
                'id':'page_searchLine',
                'style':'display:none;'
            },
            'child':[
                {
                    'tag':'div',
                    'attrs':{
                        'id':'search_form'
                    },
                    'child':[
                        {
                            'tag':'div',
                            'attrs':{
                                'id':'search_text'
                            }
                        },
                        {
                            'tag':'input',
                            'attrs':{
                                'id':'search_input',
                                'type':'text',
                                'placeholder':'Input search text here',
                                'onKeyUp':'app.views.searchInput_getSug()'
                            }
                        }
                    ]
                }
            ]
        },
        'player':{
                'tag':'div',
        	'attrs':{
        		'id':'exPlayer',
        		'style':'display:none'
        	},
        	'child':[                   
                     {
                     'tag':'div',
                     'attrs':{
                 		'id':'exPlayerName'
                     }
                 },
                 {
                     'tag':'div',
                     'attrs':{
                 		'class':'times'
                     },
                 	'child':[
						{
						    'tag':'div',
						    'attrs':{
								'id':'exPlayerTimeCur',
								'html':'00:00:00'
						    }
						},
						{
						    'tag':'div',
						    'attrs':{
								'id':'exPlayerTimeTotal',
								'html':'00:00:00'
						    }
						},
						{
						    'tag':'div',
						    'attrs':{
								'id':'exPlayerPlayMode'
						    }
						},
						{
						    'tag':'div',
						    'attrs':{
								'id':'exPlayerIntervalCur',
								'html':''
						    }
						}
					 ]
                 },

                 {
                     'tag':'div',
                     'attrs':{
                 		'class':'status'
                     },
                 	'child':[
						{
						    'tag':'div',
						    'attrs':{
								'id':'exPlayerRewind'
						    }
						},
						{
						    'tag':'div',
						    'attrs':{
								'id':'exPlayerStatusbar'
						    },
							'child':[
								{
								    'tag':'div',
								    'attrs':{
										'id':'exPlayerStatus'
								    }
								}
						     ]
						},
						
						{
						    'tag':'div',
						    'attrs':{
								'id':'exPlayerForward'
						    }
						}
                 	]
                 }
            ]
        },
        'trek':{
            'tag':'div',
            'attrs':{
              'id':'big_form',
              'style':'position:absolute; left:50px; top:50px;'
        }
        },
        'components':{
            'item':{
                'tag':'div',
                'attrs':{
                    'class':'line',
                    'rel':''
                }
            },
            'item_act_simple':{
                'tag':'div',
                'attrs':
                {
                    'class':'line_act'
                }
            },
            'item_act_extended':{
                'tag':'div',
                'attrs':
                {
                    'class':'extended_block'
                },
                'child':[
                {
                    'tag':'div',
                    'attrs':
                    {
                        'class':'line_act'
                    }
                }
                ]
            }
        }
    };
    var volobj = {
        'tag':'div',
            'attrs':{
                    'id':'volumecont',
                    'style':'display:none',
                    'class':'volumeContainer'
            },
            'child':[
                {
                    'tag':'div',
                    'attrs':{
                        'id':'mute',
                        'style':'display:none'
                    }

                },
                {
                    'tag':'div',
                    'attrs':{
                        'id':'volumeForm',
                        'style':'visibility:hidden;'
                    },
                    'child':[
                        {
                            'tag':'div',
                            'attrs':{
                                'id':'volume_bar',
                            },
                            'child':[
                                {
                                    'tag':'img',
                                    'attrs':{
                                        'src':'img/volume/volume_left.png',
                                        'id':'volumeLeft',
                                        'class':'alignLeft',
                                        'alt':''
                                    }
                                },
                                {
                                    'tag':'div',
                                    'attrs':{
                                        'id':'volume_right'
                                    }
                                }
                            ]
                        },
                        {
                            'tag':'div',
                            'attrs':{
                                'id':'volume_num'
                            }
                        }
                    ]
                }
            ]
        }
var plsobj = {
                     'tag':'div',
                     'attrs':{
                         'id':'pls_form',
                         'style':'position:absolute; right:50px; top:50px;'
                     },
                     'child':[
                         {
                             'tag':'div',
                             'attrs':{
                                 'id':'pls_upper_line',
                                 'style':' width: 300px; height: 15px;'
                             },
                             'child':[
                                 {
                                     'tag':'div',
                                     'attrs':{
                                         'id':'pls_uline_left',
                                         'style':'background: url(img/info_menu/v_menu_1a.png) left top; width: 290px; height: 15px;float:left;'
                                     }
                                 },
                                 {
                                     'tag':'div',
                                     'attrs':{
                                         'id':'pls_uline_right',
                                         'style':'background: url(img/info_menu/v_menu_1a.png) right top; width: 10px; height: 15px; float:left;'
                                     }
                                 }
                             ]
                         }
                     ]
                     
                     
                 };
    
    var alsobj = {
                     'tag':'div',
                     'attrs':{
                         'id':'als_form',
                         'class':'form_a',
                         'style':'float:left;display:none;'
                     },
                     'child':[
                         {
                             'tag':'div',
                             'attrs':{
                                 'style':' width: 300px; height: 15px;'
                             },
                             'child':[
                                 {
                                     'tag':'div',
                                     'attrs':{
                                         'class':'als_uline_left'
                                     }
                                 },
                                 {
                                     'tag':'div',
                                     'attrs':{
                                         'class':'als_uline_right'
                                     }
                                 }
                             ]
                         },
                         {
                        'tag':'div',
                        'attrs':{
                        'id':'als_line_1',
                        'class':'als_line_a',
                        'style':'width: 300px; height: 26px; '
                        },
                        'child':[
                        {
                            'tag':'div',
                            'attrs':{
                                'class':'als_midline_left',
                                'html':' {$audio$}'
                            }
                        },
                        {
                            'tag':'div',
                            'attrs':{
                                'class':'als_midline_right'
                            }
                        }
                        ]
                     },
                         {
                        'tag':'div',
                        'attrs':{
                        'id':'als_line_2',
                        'class':'als_line',
                        'style':'width: 300px; height: 26px; '
                        },
                        'child':[
                        {
                            'tag':'div',
                            'attrs':{
                                'class':'als_midline_left',
                                'html':' {$subt$}'
                               }
                        },
                        {
                            'tag':'div',
                            'attrs':{
                                'class':'als_midline_right'
                            }
                        }
                        ]
                     },
                     {
                        'tag':'div',
                        'attrs':{
                        'id':'als_line_3',
                        'class':'als_line',
                        'style':'width: 300px; height: 26px; '
                        },
                        'child':[
                        {
                            'tag':'div',
                            'attrs':{
                                'class':'als_midline_left',
                                'html':' {$3dmode$}'
                               }
                        },
                        {
                            'tag':'div',
                            'attrs':{
                                'class':'als_midline_right'
                            }
                        }
                        ]
                     },
                     {
                     'tag':'div',
                     'attrs':{
                         'style':'width: 300px; height: 15px;'
                     },
                     'child':[
                         {
                             'tag':'div',
                             'attrs':{
                                 'class':'als_dline_left'
                             }
                         },
                         {
                             'tag':'div',
                             'attrs':{
                                 'class':'als_dline_right'
                             }
                         }
                     ]}]};
    var acsobj={
                     'tag':'div',
                     'attrs':{
                         'id':'acs_form',
                         'style':'margin-top:15px;width:10px;height:30px;float:left;display:none;background: url(img/info_menu/v_menu_4.png) no-repeat;'}
    };
    
    var arsobj = {
                     'tag':'div',
                     'attrs':{
                         'id':'ars_form',
                         'class':'form_n',
                         'style':'float:left;display:none;'
                     }};

var pls_line_obj = {
                        'tag':'div',
                        'attrs':{
                            'class':'pls_line',
                            'style':'width: 300px; height: 26px; '
                        },
                        'child':[
                            {
                                'tag':'div',
                                'attrs':{
                                    'id':'pls_midline_left',
                                    'style':'background: url(../img/info_menu/v_menu_2a.png) left bottom; width: 270px; height: 26px; font-size: 20px; padding: 2px 10px; overflow: hidden; text-overflow:ellipsis;float:left;'
                                }
                            },
                            {
                                'tag':'div',
                                'attrs':{
                                    'class':'pls_midline_right',
                                    'style':'background: url(../img/info_menu/v_menu_2a.png) right bottom; width: 10px; height: 30px; float:left;'
                                }
                            }
                        ]
                    }
var pls_lowline= {
                     'tag':'div',
                     'attrs':{
                         'id':'pls_lower_line',
                         'style':'width: 300px; height: 15px;'
                     },
                     'child':[
                         {
                             'tag':'div',
                             'attrs':{
                                 'id':'pls_lline_left',
                                 'style':'background: url(img/info_menu/v_menu_1a.png) left bottom; width: 290px; height: 15px;float:left;'
                             }
                         },
                         {
                             'tag':'div',
                             'attrs':{
                                 'id':'pls_lline_right',
                                 'style':'background: url(img/info_menu/v_menu_1a.png) right bottom; width: 10px; height: 15px;float:left'
                             }
                         }
                     ]
                 };
 var suggest_list_obj = 
                 {
                     'tag':'div',
                     'attrs':{
                         'id':'suggest_list'
                     }
                         
                 };
function create_alert(label,text){
     var alert_obj ={
                        'tag':'div',
                        'attrs':{
                            'id':'alert_form'
                        },
                        'child':[
                            {
                                'tag':'div',
                                'attrs':{
                                    'id':'alert_label',
                                    'html':label
                                }
                            },
                            {
                                'tag':'div',
                                'attrs':{
                                    'id':'alert_text',
                                    'html':text
                                }
                            }
                        ]
                    };
    document.body.appendChild(app.views.createHTMLFromObj(alert_obj));
    window.setTimeout(function(){document.body.removeChild($('alert_form'))},2500);
}
 