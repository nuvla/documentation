{% assign file = include.file %}
{% assign language = include.language %}

{% assign nanosecond = "now" | date: "%N" %}

``` {{ language }}
{% include_relative {{ file }} %}
```
{: #code{{ nanosecond }}}

<button id="copybutton{{ nanosecond }}" class="btn btn-blue" data-clipboard-target="#code{{ nanosecond }}">COPY</button>

<script>
var clipboard{{ nanosecond }} = new ClipboardJS('#copybutton{{ nanosecond }}');
</script>
