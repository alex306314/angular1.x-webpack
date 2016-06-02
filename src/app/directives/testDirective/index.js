import './style.scss';

export default function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      greeting:'@'  
    },
    template: require('./template.html'),
  }  
};