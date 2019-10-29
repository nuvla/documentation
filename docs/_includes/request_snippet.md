{% assign file = include.file %}
{% assign actions = include.actions | split: " "  %}
{% assign endpoint = include.endpoint %}

{% assign nanosecond = "now" | date: "%N" %}

<div markdown="1" style="margin: 5px; font-size: 12px; position:relative; background: #2f2f2f;">

{% for action in actions  %}

<div class="http {{ action }}">
{{ action }} 
</div>

{% endfor %}


<div class="endpoint">
    {{ endpoint }}
</div>

{: #code{{ nanosecond }}}
</div>

<script>
var clipboard{{ nanosecond }} = new ClipboardJS('#copybutton{{ nanosecond }}');
</script>

<style>

.endpoint {
    display: inline-block; 
    margin-left: 7px;
    color: #fff;
    font-family: "Courier New";
}

.http {
    color: #fff; 
    display: inline-block;
    padding: 3px 10px; 
    margin: 5px;
    font-weight: bold; 
    border-radius: 4px;
}

.GET {
    background-color: #00abea; 
}

.POST {
    background-color: #49cc90; 
}

.PUT {
    background-color: #4a9e78; 
}

.DELETE {
    background-color: #f93e3e; 
}

</style>