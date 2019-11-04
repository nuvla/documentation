{% assign file = include.file %}
{% assign actions = include.actions | split: " "  %}
{% assign endpoint = include.endpoint %}
{% assign maincolor = include.maincolor %}
{% assign prefix = include.prefix %}
{% assign lettercolor = include.lettercolor %}


{% assign nanosecond = "now" | date: "%N" %}

<div markdown="1" style="margin: 5px; font-size: 12px; position:relative; background: {{ maincolor | default: "#2f2f2f" }};">

<div class="endpoint prefix" style="color: {{ lettercolor | default: "#fff" }};">
{{ prefix }}
</div>


{% for action in actions  %}

<div class="http {{ action }}">
{{ action }} 
</div>

{% endfor %}


<div class="endpoint" style="color: {{ lettercolor | default: "#fff" }};">
    {{ endpoint }}
</div>

{: #code{{ nanosecond }}}
</div>

<script>
var clipboard{{ nanosecond }} = new ClipboardJS('#copybutton{{ nanosecond }}');
</script>

<style>

.prefix {
    font-variant: small-caps;
    font-weight: bold;
    font-size: 1.5em;
}

.endpoint {
    display: inline-block; 
    margin-left: 7px;
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