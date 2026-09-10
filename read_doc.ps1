$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open('C:\Users\singh\temp_assets\testimonials\pictures that will be added as the testimonials\Testimonies.docx')
$text = $doc.Content.Text
$text | Out-File 'C:\Users\singh\temp_assets\testimonials\Testimonies.txt' -Encoding utf8
$doc.Close()
$word.Quit()
