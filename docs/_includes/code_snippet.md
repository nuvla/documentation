{% assign file = include.file %}
{% assign language = include.language %}

{% assign nanosecond = "now" | date: "%N" %}

<button id="copybutton{{ nanosecond }}" class="btn btn-blue" style="float:right" data-clipboard-target="#code{{ nanosecond }}">
<i class="material-icons">file_copy</i>
</button>

``` {{ language }}
{% include_relative {{ file }} %}
```
{: #code{{ nanosecond }}}

<script>
var clipboard{{ nanosecond }} = new ClipboardJS('#copybutton{{ nanosecond }}');
</script>
