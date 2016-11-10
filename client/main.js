import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-timeline/dist/angular-timeline';
import '../imports/lib/angular-scroll-animate/angular-scroll-animate';
import '../imports/lib/angular-perfect-scrollbar';

function MainCtrl($scope, $reactive){
	'ngInject';
	$reactive(this).attach($scope);

	$scope.title = 'this is an example title';

    $scope.side = 'left';

    $scope.events = [{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    },
    {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    },
    {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    },{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    },
    {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    }
    ];


    $scope.animateElementIn = function($el) {
        $el.removeClass('timeline-hidden');
        $el.addClass('bounce-in');
    };

    // optional: not mandatory (uses angular-scroll-animate)
    $scope.animateElementOut = function($el) {
        $el.addClass('timeline-hidden');
        $el.removeClass('bounce-in');
    };
    $scope.scrollTop = 0
   $scope.scrollHeight = 0
    $scope.onScroll = function(scrollTop, scrollHeight){
        console.log('scrolled')
        $scope.scrollTop = scrollTop;
        $scope.scrollHeight = scrollHeight;
    }
}

angular.module('app', [
	angularMeteor,
	'angular-timeline',
    'perfect_scrollbar',
    'angular-scroll-animate'
]).controller('mainCtrl', MainCtrl);