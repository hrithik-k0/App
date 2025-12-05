{{- define "my-app.name" -}}
{{- default .Chart.Name .Values.nameOverride -}}
{{- end -}}

{{- define "my-app.fullname" -}}
{{- printf "%s-%s" (include "my-app.name" .) .Release.Name -}}
{{- end -}}