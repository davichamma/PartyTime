<template>
    <footer>
        <h3>Party Time &copy; 2022</h3>
        <p>Davi Maciel</p>
    </footer>
</template>

<script>
    export default{
        name: "Footer"
    }
</script>

<style scoped>
    footer{
        background-color: #25282e;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    footer h3{
        color: #fff;
        margin-bottom: 15px;
        font-weight: 300;
        font-size: 1.6rem;
    }

    footer p{
        color: #c1b696;
    }
</style>