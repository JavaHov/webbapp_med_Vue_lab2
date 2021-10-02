

    Vue.component('leisure-activity', {

    template: `
    <tr>
        <td>{{ text }}</td>
        <td>{{ name }}</td>
        <td>Ålder: {{ age }}</td>
        <td><button v-on:click="$emit('remove')">Ta bort</button></td>
    </tr>
 ` ,
    props: ['text', 'name', 'age'] // Här definierar jag mina egna 'properties' som jag använder
})                          // i component där uppe...

    var app = new Vue({
        el: '#app',
        data: {
        activities: [
    {
        name: 'Ola',
        id: 1,
        age: 53,
        text: 'Löpning'
    },
    {
        name: 'Anna',
        id: 2,
        age: 27,
        text: 'Cykling'
    },
    {
        name: 'Josefin',
        id: 3,
        age: 36,
        text: 'Vandring'
    }
    ],
        newId: 4,
        newName: '',
        newActivity: 'Löpning',
        newAge: ''
    },
    methods: {
    addActivity: function() {

        this.activities.push({
        id: this.newId++,
        text: this.newActivity,
        name: this.newName,
        age: this.newAge
    })
    },
    switchImage: function() {

        let selected = document.getElementById("activities").value
        document.getElementById("activity_images").src = "img/" + selected + ".jpg"
    }
    }
})
