'use strict';
//create a module
angular.module("confusionApp",[])
        //create a controller.
        .controller('MenuController', ['$scope', function($scope){
            
            $scope.tab = 1;
            $scope.showDetails = false;
            
            $scope.filtText = "";
            
            $scope.dishes=[
                     {
                        name:'Uthapizza',
                        image:'images/uthapizza.png',
                        category:'mains',
                        label:'Hot',
                        price:'4.99',
                        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                        comment:''
                    },
                     {
                        name:'Zucchipakoda',
                        image:'images/zucchipakoda.png',
                        category:'appetizers',
                        label:'',
                        price:'1.94',
                        description:'Deep fried Zucchini coated with mildly spiced Chickpea Flour batter accompanied with a sweettangy tamarind sauce',
                        comment:''
                     }, 
                     {
                        name:'Vadonut',
                        image:'images/vadonut.png',
                        category:'appetizers',
                        label:'New',
                        price:'1.99',
                        description:'A quintessential Confusion experience, is it a vada or is it a donut?',
                        comment: ''
                     },
                     {
                        name:'ElaiCheese Cake',
                        image:'images/elaicheesecake.png',
                        category: 'desserts',
                        label: '',
                        price: '2.99',
                        description: 'A delectable, semi-sweet New York Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                        comment:''
                     }
                    ];
            
            $scope.select = function(setTab){
                $scope.tab = setTab;       
                if(setTab === 2)
                    $scope.filtText = "appetizers";
                else if(setTab === 3)
                    $scope.filtText = "mains";
                else if (setTab === 4)
                    $scope.filtText = "desserts";
                else
                    $scope.filtText = "";
            }
            
            $scope.isSelected = function(checkTab){
                return($scope.tab === checkTab);
            };
            
            
            $scope.toggleDetails = function(){
                $scope.showDetails = !$scope.showDetails;
            }
            
            
        }] );

.controller('ContactController', ['$scope', function($scope) {
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                        $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                                }]);
.controller('FeedbackController', ['$scope', function($scope) {
                        $scope.sendFeedback = function() {
                                console.log($scope.feedback);
                                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])