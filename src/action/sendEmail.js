import { fetchConToken } from "../helper/fetch"

export const sendEmail = (content, content2, content3) => {
    return async(dispatch, getState) => {

        const {usuarios} = getState().cht

        const subject = 'Nuevo contenido para tu crecimiento espiritual'

        const filtroUserEmail = usuarios.filter(usuarios => usuarios?.tracking === true)

        let arregloFiltroUserEmail = []

        filtroUserEmail?.map(filtroUserEmail => arregloFiltroUserEmail?.push(filtroUserEmail?.email))

        const title = '¡Nuevo contenido para ti!'

        const descripcion = `
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
        <meta content="width=device-width" name="viewport">
        <style>
        /* #### Mobile Phones Portrait #### */
        /* #### iPhone 4+ Portrait or Landscape #### */
        @media only screen and (max-width: 480px){
            table[class=contentInner] {width:100% !important;padding:0px;margin:0px;}
            img[class=zpImage]{width:260px !important;max-width: 360px !important;text-align:center;margin:0px;padding:0px} 
            body, table, td, p, a, li,div,span, blockquote{-webkit-text-size-adjust:none !important;margin:0px auto;line-height:1.7}
            table[class=zpImageCaption]{text-align:left;}
            table[class=cols]{width:100% !important;max-width:100% !important;text-align:left;}
            table[class=zpcolumns] {text-align:left;margin:0px;} 
            table[class=zpcolumn] {text-align:left;margin:0px;} 
            table[class=zpAlignPos]{width:100%;text-align:left;margin:0px;} 
            td[class=txtsize]{font-size:18px !important;}
            td[class=paddingcomp]{padding-left:15px !important;padding-right: 15px !important;}
            td[class=bannerimgpad]{padding:0px !important;}
            span[class=txtsize]{font-size:18px !important;}
            img[size = "B"]{width: 100% !important;max-width:100% !important;margin: 0px !important;padding:0px !important;}
            img[size = "F"]{width: 100% !important;max-width:100% !important;margin: 0px !important;padding:0px !important;}
            img[size = "S"]{width:105px !important; height:auto; margin:0px auto !important;padding:0px !important;}
            img[size = "M"]{width:277.869px !important;height:auto;margin:0px auto !important;padding:0px !important;}
            h1{
                font-size:28px !important;
                line-height:100% !important;
            }
            h2{
                font-size:24px !important;
                line-height:100% !important;
            }
            h3{
                font-size:20px !important;
                line-height:100% !important;
            }
            h4{
                font-size:18px !important;
                line-height:100% !important;
            }
            }		
            @media only screen and (max-width: 480px){
            .zpImage{
                height:auto !important;
                width:100% !important;
            }}
            @media only screen and (max-width: 480px){
            .contentInner,.cols,.zpAlignPos{
                width:100% !important;
                max-width:100% !important;
            }}
            @media only screen and (max-width: 480px){
            .paddingcomp{
                padding-left:15px !important;
                padding-right:15px !important;
            }
            .bannerimgpad{
                padding:0px !important;
            }
        }
            @media screen and (max-width: 480px)
            {
                    .tmplheader,.tmplfooter{width:100% !important;max-width:400px !important;margin:0px auto;text-align:center;}
            }
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
            
            </style>
    <meta content="text/html;charset=UTF-8" http-equiv="Content-Type"></head><body bgcolor="#09090a" style="margin:0; padding:0;font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;"><center> 
    <div class="zppage-container">                                                          
            <table bgcolor="#09090a" border="0" cellpadding="0" cellspacing="0" class="contentOuter" id="contentOuter" style="background-color:#f0f0f0;background-color:#09090a;font-size:12px;text-align:center;border:0px;padding:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%"> 
                <tbody><tr> 
                    <td style="border:0px;padding:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">&nbsp;</td>
                    <td align="center" style="border:0px;padding:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
                        <table bgcolor="#080909" border="0" cellpadding="0" cellspacing="0" class="contentInner" id="contentInner" style="border-collapse:collapse; border:0px;font-size:12px;background-color:#ffffff;background-color:#080909;width:600px;margin:0px auto;border:0px;" width="600"> 
                        <tbody><tr> 
                        <td height="570" style="border:0px;padding:0px;" valign="top">
                             <a name="Top" style="text-decoration:underline;"></a>
        <div baseposition="pos_YrobDQg7SAqnBt5RUo4dhQ" class="zpcontent-wrapper" id="page-container">
        <table border="0" cellpadding="0" cellspacing="0" id="page-container" style="font-size:12px;border:0px;padding:0px;border-collapse:collapse; mso-table-lspace:0pt;mso-table-rspace:0pt;text-decoration:none !important;" width="100%">
    <tbody><tr><td class="txtsize" id="elm_1604562245798" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         
    
                  <div class="zpelement-wrapper spacebar" id="elm_1604562245798" style=";word-wrap:break-word;overflow:hidden;background-color:#15212f;">
                        
                         <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt;font-size:5px; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height:15px;" width="100%">
    
                                <tbody><tr><td style="padding:0px;border:0px;font-size:5px;height:15px;border-top:none none none;border-bottom:none none none;">
    
                                &nbsp;&nbsp;&nbsp;
    
                                </td></tr>
    
                        </tbody></table>
    
                  </div>
    
    </td></tr>
    <tr><td class="txtsize" id="elm_1652755794011" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         
    
                  <div class="zpelement-wrapper spacebar" id="elm_1652755794011" style=";word-wrap:break-word;overflow:hidden;background-color:#15212f;">
                        
                         <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt;font-size:5px; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height:15px;" width="100%">
    
                                <tbody><tr><td style="padding:0px;border:0px;font-size:5px;height:15px;border-top:none none none;border-bottom:none none none;">
    
                                &nbsp;&nbsp;&nbsp;
    
                                </td></tr>
    
                        </tbody></table>
    
                  </div>
    
    </td></tr>
    <tr><td class="txtsize" id="elm_1652755825331" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
              <div class="zpelement-wrapper" id="elm_1652755825331" style=";word-wrap:break-word;overflow:hidden;padding-right:0px;background-color:#15212f;">
                <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="font-size:12px;padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
              
                <tbody><tr><td class="paddingcomp" style="border:0px;padding:7px 15px;line-height:19pt;border-top:0px none ;   border-bottom:0px none ;padding-top:7px;padding-bottom:7px;padding-right:15px;padding-left:15px;">
                                 <div componentbgcolor="#15212f" data-darkreader-inline-bgcolor style="background-color: rgb(21, 33, 47); --darkreader-inline-bgcolor:#111a26;"><p align="center" style="font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;line-height: 25pt; text-align: center;"><font color="#c5c0b8" data-darkreader-inline-color face="Arial, Helvetica" style="font-size: 24pt; --darkreader-inline-color:#bfbab1;">Centro Cristiano El Buen Samaritano</font></p></div>
                </td></tr>
            </tbody></table>
                 </div>
    </td></tr>
    <tr><td class="txtsize" id="elm_1627304621729" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         
    
                  <div class="zpelement-wrapper spacebar" id="elm_1627304621729" style=";word-wrap:break-word;overflow:hidden;background-color:#15212f;">
                        
                         <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt;font-size:5px; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height:7px;" width="100%">
    
                                <tbody><tr><td style="padding:0px;border:0px;font-size:5px;height:7px;border-top:0px none #000000;border-bottom:1px solid #000000;">
    
                                &nbsp;&nbsp;&nbsp;
    
                                </td></tr>
    
                        </tbody></table>
    
                  </div>
    
    </td></tr>
    <tr><td class="txtsize" id="elm_1604484251548" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         
    
                  <div class="zpelement-wrapper spacebar" id="elm_1604484251548" style=";word-wrap:break-word;overflow:hidden;background-color:#15212f;">
                        
                         <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt;font-size:5px; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height:6px;" width="100%">
    
                                <tbody><tr><td style="padding:0px;border:0px;font-size:5px;height:6px;border-top:none none none;border-bottom:none none none;">
    
                                &nbsp;&nbsp;&nbsp;
    
                                </td></tr>
    
                        </tbody></table>
    
                  </div>
    
    </td></tr>
    <tr><td class="txtsize" id="elm_1604484219453" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
                <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" style="font-size:12px;border:0px;padding:0px;width:100%;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;word-break:break-word;background-color:#15212f;">
            <tbody><tr>
            <td class="txtsize" style="border:0px;padding:0px 0px;border-top:none none none ;border-bottom:none none none;">
                    <div class="zpelement-wrapper image" coupcmp id="elm_1604484219453" prodcmp style=";word-wrap:break-word;overflow:hidden;padding:0px;background-color:#15212f;">
                <div>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="font-size:12px;text-align:left;padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;word-break:break-word;width:100%;text-align:center;">
                        <tbody><tr><td class="paddingcomp" style="border:0px;padding:7px 15px;text-align:center;padding-top:7px;padding-bottom:7px;padding-right:15px;padding-left:15px;">
                <a href="https://www.ccbsbonao.com.do/" style="text-decoration:underline;border:0px;" target="_blank">
                <img align="center" alt="https://campaign-image.com/zohocampaigns/174213000013650240_zc_v30_1604568465875_welcome26_banner.png" class="zpImage" height="300" hspace="0" size="C" src="https://campaign-image.com/zohocampaigns/954164000000042304_zc_v12_1652757269910_logo_ccbs.png" style="width:300px;height:300px;max-width:300px !important;border:0px;text-align:center;" vspace="0" width="300">
                </a>
                </td></tr>
                <tr><td class="txtsize" style="border:0px;padding:0px;text-align:left;margin:0px auto;" width="300">
                    <div class="zpImageCaption" style="text-align:center;margin:0px auto;padding:0px;"></div>
                </td></tr></tbody></table>
            </div>
                </div>
                </td></tr></tbody></table>
    </td></tr>
    <tr><td class="txtsize" id="elm_1604484257346" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
         
    
                  <div class="zpelement-wrapper spacebar" id="elm_1604484257346" style=";word-wrap:break-word;overflow:hidden;background-color:#15212f;">
                        
                         <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt;font-size:5px; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height:18px;" width="100%">
    
                                <tbody><tr><td style="padding:0px;border:0px;font-size:5px;height:18px;border-top:none none none;border-bottom:none none none;">
    
                                &nbsp;&nbsp;&nbsp;
    
                                </td></tr>
    
                        </tbody></table>
    
                  </div>
    
    </td></tr>
    <tr><td class="txtsize" id="elm_1604484315288" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
              <div class="zpelement-wrapper" id="elm_1604484315288" style=";word-wrap:break-word;overflow:hidden;padding-right:0px;background-color:#15212f;">
                <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="font-size:12px;padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
              
                <tbody><tr><td class="paddingcomp" style="border:0px;padding:7px 15px;line-height:21pt;border-top:0px none ;   border-bottom:0px none ;padding-top:7px;padding-bottom:7px;padding-right:90px;padding-left:25px;">
                                 <div componentbgcolor="#15212f" componentlineheight="21pt" componentpaddingbottom="7px" componentpaddingleft="25px" componentpaddingright="90px" componentpaddingtop="7px" data-darkreader-inline-bgcolor style="background-color: rgb(21, 33, 47); --darkreader-inline-bgcolor:#111a26;"><p align="left" style="line-height:1.7;font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;text-align: left; line-height: 21pt;"><font color="#cdc8c2" data-darkreader-inline-color face="Arial, Helvetica" style="font-size: 12pt; line-height: 21pt; --darkreader-inline-color:#c5c0b8;">&iexcl;Dios te bendiga!</font></p></div>
                </td></tr>
            </tbody></table>
                 </div>
    </td></tr>
    <tr><td class="txtsize" id="elm_1604484450624" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
              <div class="zpelement-wrapper" id="elm_1604484450624" style=";word-wrap:break-word;overflow:hidden;padding-right:0px;background-color:#15212f;">
                <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="font-size:12px;padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
              
                <tbody><tr><td class="paddingcomp" style="border:0px;padding:7px 15px;line-height:21pt;border-top:0px none ;   border-bottom:0px none ;padding-top:9px;padding-bottom:9px;padding-right:90px;padding-left:25px;">
                                 <div componentbgcolor="#15212f" componentlineheight="21pt" componentpaddingbottom="9px" componentpaddingleft="25px" componentpaddingright="90px" componentpaddingtop="9px" data-darkreader-inline-bgcolor style="background-color: rgb(21, 33, 47); --darkreader-inline-bgcolor:#111a26;"><p align="left" style="line-height:1.7;font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;text-align: left; line-height: 21pt;"><font color="#bfbab1" data-darkreader-inline-color face="Arial, Helvetica" style="--darkreader-inline-color:#bbb5ac;"><span style="font-size: 16px;">Estamos para ti</span></font></p></div>
                </td></tr>
            </tbody></table>
                 </div>
    </td></tr>
    <tr><td class="txtsize" id="elm_1604484330291" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
              <div class="zpelement-wrapper" id="elm_1604484330291" style=";word-wrap:break-word;overflow:hidden;padding-right:0px;background-color:#15212f;">
                <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="font-size:12px;padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
              
                <tbody><tr><td class="paddingcomp" style="border:0px;padding:7px 15px;line-height:21pt;border-top:0px none ;   border-bottom:0px none ;padding-top:9px;padding-bottom:9px;padding-right:50px;padding-left:25px;">
                                 <div componentbgcolor="#15212f" componentlineheight="21pt" componentpaddingbottom="9px" componentpaddingleft="25px" componentpaddingright="50px" componentpaddingtop="9px" data-darkreader-inline-bgcolor style="background-color: rgb(21, 33, 47); --darkreader-inline-bgcolor:#111a26;"><p align="left" style="line-height:1.7;font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;text-align: left; line-height: 21pt;"><font face="Arial, Helvetica" style><font color="#bfbab1" data-darkreader-inline-color style="--darkreader-inline-color:#bbb5ac;"><span style="font-size: 16px;">${(content2 !== null) ? `Hemos agregado un nuevo capítulo de la miniserie titulada: ${content}.` : `${content3} ${content}.`}</span></font></font></p></div>
                </td></tr>
            </tbody></table>
                 </div>
    </td></tr>
    <tr><td class="txtsize" id="elm_1604562712323" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
              <div class="zpelement-wrapper" id="elm_1604562712323" style=";word-wrap:break-word;overflow:hidden;padding-right:0px;background-color:#15212f;">
                <table bgcolor="#15212f" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="font-size:12px;padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
              
                <tbody><tr><td class="paddingcomp" style="border:0px;padding:7px 15px;line-height:19pt;border-top:0px none ;   border-bottom:0px none ;padding-top:9px;padding-bottom:9px;padding-right:90px;padding-left:25px;">
                                 <div componentbgcolor="#15212f" componentpaddingbottom="9px" componentpaddingleft="25px" componentpaddingright="90px" componentpaddingtop="9px" data-darkreader-inline-bgcolor style="background-color: rgb(21, 33, 47); --darkreader-inline-bgcolor:#111a26;"><p align="left" style="font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;line-height: 19pt; text-align: left;"><font color="#cdc8c2" data-darkreader-inline-color face="Arial, Helvetica" style="--darkreader-inline-color:#c5c0b8;"><font style><span style="font-size: 16px;">Queremos que cada </span></font><span style="font-size: 16px;">d&iacute;a</span><font style><span style="font-size: 16px;">&nbsp;crezcas más en el Se&ntilde;or</span></font></font></p></div>
                </td></tr>
            </tbody></table>
                 </div>
    </td></tr>
    <tr><td class="txtsize" id="elm_1604484471450" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
                
                         
                        
              
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        <table bgcolor="#15212f" cellpadding="0" cellspacing="0" height="48" style="font-size:12px;border:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border:none;" width="100%">
            <tbody><tr><td class="paddingcomp" style="border:0px;padding:7px 15px;border-top:none none none;border-bottom:none none none;padding-top:18px;padding-bottom:13px;padding-right:90px;padding-left:25px;">
            <div class="zpelement-wrapper buttonElem" id="elm_1604484471450" style="overflow:hidden;word-wrap:break-word;">
            <div class="zpAlignPos" style="text-align:left;">
                    <table align="left" cellpadding="0" cellspacing="0" style="font-size:12px;border:none;padding:0px;border:0px;margin:0px auto;border-collapse:separate; mso-table-lspace:0pt; mso-table-rspace:0pt;">
                    <tbody><tr>
                       <td align="left" class="txtsize" style="border:0px;padding:0px;color:#bbb5ac;font-family:Arial;text-align:left;border-radius:4px;text-align:left;cursor:pointer;">
                             <!--[if mso]>
                                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.ccbsbonao.com.do" style="border-radius:4px;height:51px;v-text-anchor:middle;width:206px" arcsize="4%" strokecolor="#181a1b" strokeweight ="0px" fillcolor="#021a41">
                                  <v:stroke dashstyle="solid" />
                                    <w:anchorlock/>
                                    <center style="color:#bbb5ac;font-family:Arial;font-size:12pt;">Inicia Sesión</center>
                                  </v:roundrect>
                            <![endif]-->
                            <a align="center" href="https://www.ccbsbonao.com.do" style="padding:0px 0px;background-color:#021a41;width:206px;line-height:51px;font-size:12pt;font-family:Arial;color:#bbb5ac;cursor:pointer;text-decoration:none;border-radius:4px;border:0px solid #181a1b;display:inline-block;mso-hide:all;text-align:center;" target="_blank">
                                <span style="color:#bbb5ac;line-height:51px">
                                    Inicia Sesi&oacute;n
                                </span>
                            </a>
                        </td>
                    </tr>
                    </tbody></table>
                </div>
        </div>
        </td></tr></tbody></table>
    </td></tr>
    <tr><td class="txtsize" id="elm_1614686669143" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
            
                 <div class="zpelement-wrapper divider" id="elm_1614686669143" style=";word-wrap:break-word;overflow:hidden;background-color:rgb(21, 33, 47);">
                 <table bgcolor="rgb(21, 33, 47)" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt;font-size:5px; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color:rgb(21, 33, 47);" width="100%">
                 <tbody><tr><td class="txtsize" style="border:0px;padding:5px 7px 19px 7px;border-collapse:collapse;">
                        <div class="divider" componentbgcolor="#15212f" componentborder="#dcdcdc" style="margin:0px;padding:0px;text-align:center;"><table align="center" border="0" border-color="#dcdcdc" cellpadding="0" cellspacing="0" class="dvdrtbl" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="border-collapse:collapse;font-size:12px;border: 0px; font-size: 0px; width: 94%; margin: auto; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" width="94%"> <tbody><tr><td align="center" border-size="1px" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top height="0" style="border:0px;padding:7px;border-bottom: none rgb(220, 220, 220); border-left: none rgb(220, 220, 220); border-right: none rgb(220, 220, 220); font-size: 0px; margin: 0px; padding: 0px; width: 100%; border-top: 1px solid rgb(220, 220, 220); --darkreader-inline-border-bottom:#3a3f41; --darkreader-inline-border-left:#3a3f41; --darkreader-inline-border-right:#3a3f41; --darkreader-inline-border-top:#3a3f41;" width="100%"> &nbsp; &nbsp; &nbsp; </td> </tr></tbody></table></div>
                </td></tr></tbody></table>
                </div>
    </td></tr>
    <tr><td class="txtsize" id="elm_1604485385412" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
              <div class="zpelement-wrapper" id="elm_1604485385412" style=";word-wrap:break-word;overflow:hidden;padding-right:0px;background-color:#333333;">
                <table bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="font-size:12px;padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
              
                <tbody><tr><td class="paddingcomp" style="border:0px;padding:7px 15px;line-height:19pt;border-top:0px none ;   border-bottom:0px none ;padding-top:7px;padding-bottom:7px;padding-right:15px;padding-left:25px;">
                                 <div componentbgcolor="#333333" componentpaddingbottom="7px" componentpaddingleft="25px" componentpaddingright="15px" componentpaddingtop="7px" data-darkreader-inline-bgcolor style="background-color: rgb(51, 51, 51); --darkreader-inline-bgcolor:#262a2b;"><p align="left" style="font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;line-height: 19pt; text-align: left;"><font color="#cdc8c2" data-darkreader-inline-color face="Arial, Helvetica" style="font-size: 11pt; --darkreader-inline-color:#c5c0b8;"><span data-doc-id="4504799000023434366" data-doc-type="writer" style="font-style: normal;">S&iacute;guenos en nuestras redes sociales</span></font></p></div>
                </td></tr>
            </tbody></table>
                 </div>
    </td></tr>
    <tr><td class="txtsize" id="elm_1614686702323" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
    
    
    
    
    
    
    
    
    
                        <div class="zpelement-wrapper wdgts" id="elm_1614686702323" style="overflow:hidden;word-wrap:break-word;">
                            <table bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt;font-size:5px; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;  background-color:#333333;" width="100%">
                                <tbody><tr><td style="padding:7px 15px;border:0px;font-size:5px;border-top:0px none ;border-bottom:0px none ;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;border-collapse:collapse;font-size:12px;min-width: 100%; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" width="100%"><tbody><tr><td align="center" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="top"> <table align="left" border="0" cellpadding="0" cellspacing="0" componentbgcolor="#333333" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top icontext="true" index="2" name="zcsclwdgts_alnmnt" style=" border:0px;font-size:12px;border-collapse: collapse; border: none; margin: auto; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;"><tbody><tr><td align="left" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="top"> <table align="center" border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top name="zcsclwdgtscontainer" style="border-collapse:collapse;font-size:12px;border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;"><tbody><tr><td align="left" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="top"><table align="left" border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;font-size:12px;border-collapse: collapse; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;"><tbody><tr><td data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="top"> <table border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;font-size:12px;border-collapse: separate; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;"><tbody><tr><td align="left" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="border:0px;padding: 0px 9px; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="middle"> <table align="left" border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;font-size:12px;border-collapse: collapse; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" width><tbody><tr><td align="center" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top name="sclwdgtimges" style="padding:7px;border: none; padding: 0px 0px 6px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="middle"> <a href="https://www.facebook.com/ccbsbonao" style="text-decoration:underline;display: block;font-size: 1px;" target="_blank"><img alt="Facebook" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top data-darkreader-inline-outline height="35" src="https://campaign-image.com/zohocampaigns/954164000000042304_2_1652756234836_zcsclwgtfb2.png" style="border: 0px; margin: 0px; outline: none; text-decoration: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial; --darkreader-inline-outline: initial; width: 25px; height: 25px;" vspace="10" width="35"></a> </td></tr><tr><td align="center" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top name="sclwdgtcaptns" style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="middle"><a href="https://www.facebook.com/ccbsbonao" style="display: block;font-size: 1px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;" target="_blank"><p data-darkreader-inline-color fntname="Arial" fntsze="8" style="font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;line-height: normal; font-family: Arial, Helvetica, sans-serif; color: rgb(197, 192, 184); font-size: 8pt; direction: rtl; --darkreader-inline-color:#bfbab1;">Facebook</p></a> </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td><td align="left" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="top"><table align="left" border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;font-size:12px;border-collapse: collapse; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;"><tbody><tr><td data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="top"> <table border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;font-size:12px;border-collapse: separate; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;"><tbody><tr><td align="left" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="border:0px;padding: 0px 9px; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="middle"> <table align="left" border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;font-size:12px;border-collapse: collapse; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" width><tbody><tr><td align="center" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top name="sclwdgtimges" style="padding:7px;border: none; padding: 0px 0px 6px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="middle"> <a href="https://www.youtube.com/c/Centrocristiano100" style="text-decoration:underline;display: block;font-size: 1px;" target="_blank"><img alt="Youtube" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top data-darkreader-inline-outline height="35" src="https://campaign-image.com/zohocampaigns/954164000000042304_3_1652756234923_zcsclwgtyt2.png" style="border: 0px; margin: 0px; outline: none; text-decoration: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial; --darkreader-inline-outline: initial; width: 25px; height: 25px;" vspace="10" width="35"></a> </td></tr><tr><td align="center" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top name="sclwdgtcaptns" style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="middle"><a href="https://www.youtube.com/c/Centrocristiano100" style="display: block;font-size: 1px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;" target="_blank"><p data-darkreader-inline-color fntname="Arial" fntsze="8" style="font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;line-height: normal; font-family: Arial, Helvetica, sans-serif; color: rgb(197, 192, 184); font-size: 8pt; direction: rtl; --darkreader-inline-color:#bfbab1;">Youtube</p></a> </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td><td align="left" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="top"><table align="left" border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;font-size:12px;border-collapse: collapse; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;"><tbody><tr><td data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="top"> <table border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;font-size:12px;border-collapse: separate; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;"><tbody><tr><td align="left" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style="border:0px;padding: 0px 9px; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="middle"> <table align="left" border="0" cellpadding="0" cellspacing="0" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top style=" border:0px;font-size:12px;border-collapse: collapse; border: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" width><tbody><tr><td align="center" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top name="sclwdgtimges" style="padding:7px;border: none; padding: 0px 0px 6px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="middle"> <a href="https://www.instagram.com/ccbsbonao/?hl=es-la" style="text-decoration:underline;display: block;font-size: 1px;" target="_blank"><img alt="Instagram" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top data-darkreader-inline-outline height="35" src="https://campaign-image.com/zohocampaigns/954164000000042304_4_1652756235013_zcsclwgtinsta2.png" style="border: 0px; margin: 0px; outline: none; text-decoration: none; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial; --darkreader-inline-outline: initial; width: 25px; height: 25px;" vspace="10" width="35"></a> </td></tr><tr><td align="center" data-darkreader-inline-border-bottom data-darkreader-inline-border-left data-darkreader-inline-border-right data-darkreader-inline-border-top name="sclwdgtcaptns" style="padding:7px;border: none; padding: 0px; margin: 0px; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" valign="middle"><a href="https://www.instagram.com/ccbsbonao/?hl=es-la" style="display: block;font-size: 1px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;" target="_blank"><p data-darkreader-inline-color fntname="Arial" fntsze="8" style="font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;line-height: normal; font-family: Arial, Helvetica, sans-serif; color: rgb(197, 192, 184); font-size: 8pt; direction: rtl; --darkreader-inline-color:#bfbab1;">Instagram</p></a> </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>	
                                </td></tr>
                            </tbody></table>	
                        </div>
    </td></tr>
    <tr><td class="txtsize" id="elm_1604485578005" style="border:0px;padding:0px 0px;border-collapse:collapse;" valign="top">
    
              <div class="zpelement-wrapper" id="elm_1604485578005" style=";word-wrap:break-word;overflow:hidden;padding-right:0px;background-color:#333333;">
                <table bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" class="zpAlignPos" style="font-size:12px;padding:0px;border:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;word-break:break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" width="100%">
              
                <tbody><tr><td class="paddingcomp" style="border:0px;padding:7px 15px;line-height:21pt;border-top:0px none ;   border-bottom:0px none ;padding-top:7px;padding-bottom:7px;padding-right:40px;padding-left:25px;">
                                 <div componentbgcolor="#333333" componentlineheight="21pt" componentpaddingbottom="7px" componentpaddingleft="25px" componentpaddingright="40px" componentpaddingtop="7px" data-darkreader-inline-bgcolor style="background-color: rgb(51, 51, 51); --darkreader-inline-bgcolor:#262a2b;"><p align="center" style="font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;line-height: 21pt; text-align: center;"><font color="#bababa" data-darkreader-inline-color face="Arial, Helvetica" style="font-size: 11pt; line-height: 21pt; --darkreader-inline-color:#bcb7ae;"></font></p><span><div align="center" style="text-align: center;"><span data-darkreader-inline-bgcolor style="font-size: 12pt; background-color: rgb(51, 51, 51); --darkreader-inline-bgcolor:#262a2b;"><font color="#cdc8c2" data-darkreader-inline-color style="--darkreader-inline-color:#c5c0b8;">Somos una gran familia, unida para amar y servir a Dios, comprometidos con alcanzar el perdido y equiparlo hasta que tenga el car&aacute;cter de Cristo.</font></span></div></span><p align="center" style="font-family:Arial,verdana;font-size:12px; color:#000000;padding:0px;margin: 0;line-height: 21pt; text-align: center;"><font face="Arial, Helvetica" style="line-height: 21pt;"><font color="#bababa" data-darkreader-inline-color style="font-size: 11pt; line-height: 21pt; --darkreader-inline-color:#bcb7ae;"></font><br></font></p></div>
                </td></tr>
            </tbody></table>
                 </div>
    </td></tr>
        </tbody></table>
    </div>
    
                        </td> 
                        </tr> 
                        </tbody></table>
                    </td> 
                    <td style="border:0px;padding:0px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">&nbsp;</td>
                </tr> 
            </tbody></table> 
    </div>
    </center> 
    </body></html>
        `

        const email = 'ccbsrd@gmail.com'

        const email2 = arregloFiltroUserEmail

        await fetchConToken('sendEmail', {subject, title, email2, descripcion, email}, 'POST');
    }
}