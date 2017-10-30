var app = angular.module("myapp",[]);


app.directive("myFirstDirective",function(){
    return {
        template:"<h1 class='mystyle'>Hello This is my Custom Directive and this is example</h1>",
        restrict:"E"  // Element Level, Attribute Level , Class Level, Comment Level
    }
});
app.controller("myctrl",function($scope){
$scope.firstName = "Amit";
    $scope.secondName = "Srivastava";

});
app.controller("myctrl2",function($scope){
    $scope.firstName = "Ram";
    $scope.secondName = "Kumar";
});

app.directive("nameDirective",function(){
    return {
        template:"<b>Hello Name is  {{firstName}} {{secondName}} </b>",
        restrict:"E"  // Element Level, Attribute Level , Class Level
    }
});


app.directive("printlinks",function(){
	return{
		controller:"myctrl",
		link:function(scope,element,attrs){
			
			element[0].innerHTML = "<a href='"+attrs.link1+"'>First Link</a><br><a href='"+attrs.link2+"'>Second Link</a> "+scope.firstName;
		},
		restrict:"E"
	}
});

app.directive("sum",function(){
	return {
        controller:"myctrl",
        link:function(scope,element,attrs){
			var s = parseInt(attrs.firstno) + parseInt(attrs.secondno) ;
            element[0].innerHTML="<b>Sum of Two Numbers  </b>"+s;
			//console.log(attrs.testlevel);
        },
		restrict:"E"
	}
});

app.directive("testlevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>Test Complete By</b>"+scope.firstName+"<br> <h1> Test</h1> "+attrs.testlevel;
			//console.log(attrs.testlevel);
        },
        restrict:"A"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("anim",function(){
	return {
		link:function(scope,element,attrs){
			console.log("Anim ",element[0]);
			element.bind("click",function(){
			element.hide(2000);
			});
		},
		restrict:"A" 
		
	}
})

app.directive("dialog",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
           element[0].innerHTML = "<div id='dialog' title='"+attrs.title+"'> <p>"+attrs.content+"</p></div>";
		  console.log(element);
			$("#dialog").dialog({
				autoOpen: true,
				hide: {
        effect: "explode",
        duration: 1000
      }
			});
        },

        restrict:"E"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("jqueryuse",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
			
            element.bind("mouseenter",function(){
                //element.addClass("mystyle");
                element.animate({height: "300px"});
            });
            element.bind("mouseleave",function(){
                //element.removeClass("mystyle");
				element.animate({height: "100px"});
                //element.show(1000);
            });
        },

        restrict:"A"  // Element Level, Attribute Level , Class Level
    }
});


app.directive("attributelevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element.bind("mouseenter",function(){
            element[0].innerHTML="<b>this is an Attribute (Mouse enter) level directive";
            });
            element.bind("mouseleave",function(){
                element[0].innerHTML="<b>this is an Attribute (Mouse Leave) level directive";
            });
        },

        restrict:"A"  // Element Level, Attribute Level , Class Level
    }
});



app.directive("classlevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>this is an class level directive ";
        },
        restrict:"C"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("commentlevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>this is an comment level directive";
        },
        restrict:"M"  // Element Level, Attribute Level , Class Level
    }
});