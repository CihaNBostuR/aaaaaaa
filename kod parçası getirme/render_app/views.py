from django.http import JsonResponse


def get_section(request):
    section_html = 'Bu bir test bölümüdür.'
    data = {'section_html': section_html}
    return JsonResponse(data)



