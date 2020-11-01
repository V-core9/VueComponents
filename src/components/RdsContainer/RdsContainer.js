
import NameImput from "@/components/Inputs/NameImput.vue";

export default {
    name: "RdsContainer",
    components: {
        NameImput
    },
    props: {
      id: Number,
      title: String,
      subtitle: String,
      content: String
    },
    data() {
        return {
            styleObject: {
                background: 'red',
                top: '13px',
                left: '13px'
            },
        }
    },
    methods: {
        onClickButton (event) {
            event.preventDefault();
            this.$emit('clicked', this.id );
        }
    },
    created() {
        console.log('RdsContainer Created')
    }
}