{% assign file = include.file %}
{% assign language = include.language %}

{% assign nanosecond = "now" | date: "%N" %}

<div markdown="1" style="position:relative">
<button id="copybutton{{ nanosecond }}"
        class="btn btn-blue"
        style="position:absolute; top:0; right:0;"
        data-clipboard-target="#code{{ nanosecond }}">
<i class="material-icons">file_copy</i>
</button>

``` {{ language }}
{% include_relative {{ file }} %}
```
{: #code{{ nanosecond }}}
</div>

<script>
var clipboard{{ nanosecond }} = new ClipboardJS('#copybutton{{ nanosecond }}');
</script>
