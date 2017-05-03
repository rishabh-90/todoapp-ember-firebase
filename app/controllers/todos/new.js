import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    //Add todo task
    addTodo(){
      var title = this.get('title');
      var body = this.get('body');
      var date = this.get('date');

      // create Todo
      var newTodo = this.store.createRecord('todo',{
        title,
        body,
        date: new Date(date)

      });
      // save to FB
      newTodo.save();

      //clear form

      this.setProperties({
          title:'',
          body: '',
          date: ''
        });
    },

  }
});
