/**
 * escape character from string
 */
if (!characterEscape) {
	var characterEscape = function(targetStr, characterAry) {
		characterAry = characterAry;
		/*from http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML*/
		var characterNameMap = {
			quotation_mark: {
				name: 'quot',
				character: '"'
			},
			/*	U+0022 (34)		HTML 2.0		HTMLspecial		ISOnum		quotation mark (= APL quote)*/
			ampersand: {
				name: 'amp',
				character: '&'
			},
			/*	U+0026 (38)		HTML 2.0		HTMLspecial		ISOnum		ampersand*/
			apostrophe: {
				name: 'apos',
				character: '\''
			},
			/*	U+0027 (39)		XHTML 1.0		HTMLspecial		ISOnum		apostrophe (= apostrophe-quote); see below*/
			less_than_sign: {
				name: 'lt',
				character: '<'
			},
			/*	U+003C (60)		HTML 2.0		HTMLspecial		ISOnum		less-than sign*/
			greater_than_sign: {
				name: 'gt',
				character: '>'
			},
			/*	U+003E (62)		HTML 2.0		HTMLspecial		ISOnum		greater-than sign*/
			no_break_space: {
				name: 'nbsp',
				character: ' '
			},
			/*	U+00A0 (160)		HTML 3.2		HTMLlat1		ISOnum		no-break space (= non-breaking space)[d]*/
			inverted_exclamation_mark: {
				name: 'iexcl',
				character: '¡'
			},
			/*	U+00A1 (161)		HTML 3.2		HTMLlat1		ISOnum		inverted exclamation mark*/
			cent_sign: {
				name: 'cent',
				character: '¢'
			},
			/*	U+00A2 (162)		HTML 3.2		HTMLlat1		ISOnum		cent sign*/
			pound_sign: {
				name: 'pound',
				character: '£'
			},
			/*	U+00A3 (163)		HTML 3.2		HTMLlat1		ISOnum		pound sign*/
			currency_sign: {
				name: 'curren',
				character: '¤'
			},
			/*	U+00A4 (164)		HTML 3.2		HTMLlat1		ISOnum		currency sign*/
			yen_sign: {
				name: 'yen',
				character: '¥'
			},
			/*	U+00A5 (165)		HTML 3.2		HTMLlat1		ISOnum		yen sign (= yuan sign)*/
			broken_bar: {
				name: 'brvbar',
				character: '¦'
			},
			/*	U+00A6 (166)		HTML 3.2		HTMLlat1		ISOnum		broken bar (= broken vertical bar)*/
			section_sign: {
				name: 'sect',
				character: '§'
			},
			/*	U+00A7 (167)		HTML 3.2		HTMLlat1		ISOnum		section sign*/
			diaeresis: {
				name: 'uml',
				character: '¨'
			},
			/*	U+00A8 (168)		HTML 3.2		HTMLlat1		ISOdia		diaeresis (= spacing diaeresis); see Germanic umlaut*/
			copyright_symbol: {
				name: 'copy',
				character: '©'
			},
			/*	U+00A9 (169)		HTML 3.2		HTMLlat1		ISOnum		copyright symbol*/
			feminine_ordinal_indicator: {
				name: 'ordf',
				character: 'ª'
			},
			/*	U+00AA (170)		HTML 3.2		HTMLlat1		ISOnum		feminine ordinal indicator*/
			left_pointing_double_angle_quotation_mark: {
				name: 'laquo',
				character: '«'
			},
			/*	U+00AB (171)		HTML 3.2		HTMLlat1		ISOnum		left-pointing double angle quotation mark (= left pointing guillemet)*/
			not_sign: {
				name: 'not',
				character: '¬'
			},
			/*	U+00AC (172)		HTML 3.2		HTMLlat1		ISOnum		not sign*/
			soft_hyphen: {
				name: 'shy',
				character: ' '
			},
			/*	U+00AD (173)		HTML 3.2		HTMLlat1		ISOnum		soft hyphen (= discretionary hyphen)*/
			registered_sign: {
				name: 'reg',
				character: '®'
			},
			/*	U+00AE (174)		HTML 3.2		HTMLlat1		ISOnum		registered sign ( = registered trademark symbol)*/
			macron: {
				name: 'macr',
				character: '¯'
			},
			/*	U+00AF (175)		HTML 3.2		HTMLlat1		ISOdia		macron (= spacing macron = overline = APL overbar)*/
			degree_symbol: {
				name: 'deg',
				character: '°'
			},
			/*	U+00B0 (176)		HTML 3.2		HTMLlat1		ISOnum		degree symbol*/
			plus_minus_sign: {
				name: 'plusmn',
				character: '±'
			},
			/*	U+00B1 (177)		HTML 3.2		HTMLlat1		ISOnum		plus-minus sign (= plus-or-minus sign)*/
			superscript_two: {
				name: 'sup2',
				character: '²'
			},
			/*	U+00B2 (178)		HTML 3.2		HTMLlat1		ISOnum		superscript two (= superscript digit two = squared)*/
			superscript_three: {
				name: 'sup3',
				character: '³'
			},
			/*	U+00B3 (179)		HTML 3.2		HTMLlat1		ISOnum		superscript three (= superscript digit three = cubed)*/
			acute_accent: {
				name: 'acute',
				character: '´'
			},
			/*	U+00B4 (180)		HTML 3.2		HTMLlat1		ISOdia		acute accent (= spacing acute)*/
			micro_sign: {
				name: 'micro',
				character: 'µ'
			},
			/*	U+00B5 (181)		HTML 3.2		HTMLlat1		ISOnum		micro sign*/
			pilcrow_sign: {
				name: 'para',
				character: '¶'
			},
			/*	U+00B6 (182)		HTML 3.2		HTMLlat1		ISOnum		pilcrow sign ( = paragraph sign)*/
			middle_dot: {
				name: 'middot',
				character: '·'
			},
			/*	U+00B7 (183)		HTML 3.2		HTMLlat1		ISOnum		middle dot (= Georgian comma = Greek middle dot)*/
			cedilla: {
				name: 'cedil',
				character: '¸'
			},
			/*	U+00B8 (184)		HTML 3.2		HTMLlat1		ISOdia		cedilla (= spacing cedilla)*/
			superscript_one: {
				name: 'sup1',
				character: '¹'
			},
			/*	U+00B9 (185)		HTML 3.2		HTMLlat1		ISOnum		superscript one (= superscript digit one)*/
			masculine_ordinal_indicator: {
				name: 'ordm',
				character: 'º'
			},
			/*	U+00BA (186)		HTML 3.2		HTMLlat1		ISOnum		masculine ordinal indicator*/
			right_pointing_double_angle_quotation_mark: {
				name: 'raquo',
				character: '»'
			},
			/*	U+00BB (187)		HTML 3.2		HTMLlat1		ISOnum		right-pointing double angle quotation mark (= right pointing guillemet)*/
			vulgar_fraction_one_quarter: {
				name: 'frac14',
				character: '¼'
			},
			/*	U+00BC (188)		HTML 3.2		HTMLlat1		ISOnum		vulgar fraction one quarter (= fraction one quarter)*/
			vulgar_fraction_one_half: {
				name: 'frac12',
				character: '½'
			},
			/*	U+00BD (189)		HTML 3.2		HTMLlat1		ISOnum		vulgar fraction one half (= fraction one half)*/
			vulgar_fraction_three_quarters: {
				name: 'frac34',
				character: '¾'
			},
			/*	U+00BE (190)		HTML 3.2		HTMLlat1		ISOnum		vulgar fraction three quarters (= fraction three quarters)*/
			inverted_question_mark: {
				name: 'iquest',
				character: '¿'
			},
			/*	U+00BF (191)		HTML 3.2		HTMLlat1		ISOnum		inverted question mark (= turned question mark)*/
			Latin_capital_letter_A_with_grave_accent: {
				name: 'Agrave',
				character: 'À'
			},
			/*	U+00C0 (192)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter A with grave accent (= Latin capital letter A grave)*/
			Latin_capital_letter_A_with_acute_accent: {
				name: 'Aacute',
				character: 'Á'
			},
			/*	U+00C1 (193)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter A with acute accent*/
			Latin_capital_letter_A_with_circumflex: {
				name: 'Acirc',
				character: 'Â'
			},
			/*	U+00C2 (194)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter A with circumflex*/
			Latin_capital_letter_A_with_tilde: {
				name: 'Atilde',
				character: 'Ã'
			},
			/*	U+00C3 (195)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter A with tilde*/
			Latin_capital_letter_A_with_diaeresis: {
				name: 'Auml',
				character: 'Ä'
			},
			/*	U+00C4 (196)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter A with diaeresis*/
			Latin_capital_letter_A_with_ring_above: {
				name: 'Aring',
				character: 'Å'
			},
			/*	U+00C5 (197)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter A with ring above (= Latin capital letter A ring)*/
			Latin_capital_letter_AE: {
				name: 'AElig',
				character: 'Æ'
			},
			/*	U+00C6 (198)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter AE (= Latin capital ligature AE)*/
			Latin_capital_letter_C_with_cedilla: {
				name: 'Ccedil',
				character: 'Ç'
			},
			/*	U+00C7 (199)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter C with cedilla*/
			Latin_capital_letter_E_with_grave_accent: {
				name: 'Egrave',
				character: 'È'
			},
			/*	U+00C8 (200)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter E with grave accent*/
			Latin_capital_letter_E_with_acute_accent: {
				name: 'Eacute',
				character: 'É'
			},
			/*	U+00C9 (201)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter E with acute accent*/
			Latin_capital_letter_E_with_circumflex: {
				name: 'Ecirc',
				character: 'Ê'
			},
			/*	U+00CA (202)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter E with circumflex*/
			Latin_capital_letter_E_with_diaeresis: {
				name: 'Euml',
				character: 'Ë'
			},
			/*	U+00CB (203)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter E with diaeresis*/
			Latin_capital_letter_I_with_grave_accent: {
				name: 'Igrave',
				character: 'Ì'
			},
			/*	U+00CC (204)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter I with grave accent*/
			Latin_capital_letter_I_with_acute_accent: {
				name: 'Iacute',
				character: 'Í'
			},
			/*	U+00CD (205)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter I with acute accent*/
			Latin_capital_letter_I_with_circumflex: {
				name: 'Icirc',
				character: 'Î'
			},
			/*	U+00CE (206)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter I with circumflex*/
			Latin_capital_letter_I_with_diaeresis: {
				name: 'Iuml',
				character: 'Ï'
			},
			/*	U+00CF (207)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter I with diaeresis*/
			Latin_capital_letter_Eth: {
				name: 'ETH',
				character: 'Ð'
			},
			/*	U+00D0 (208)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter Eth*/
			Latin_capital_letter_N_with_tilde: {
				name: 'Ntilde',
				character: 'Ñ'
			},
			/*	U+00D1 (209)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter N with tilde*/
			Latin_capital_letter_O_with_grave_accent: {
				name: 'Ograve',
				character: 'Ò'
			},
			/*	U+00D2 (210)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter O with grave accent*/
			Latin_capital_letter_O_with_acute_accent: {
				name: 'Oacute',
				character: 'Ó'
			},
			/*	U+00D3 (211)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter O with acute accent*/
			Latin_capital_letter_O_with_circumflex: {
				name: 'Ocirc',
				character: 'Ô'
			},
			/*	U+00D4 (212)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter O with circumflex*/
			Latin_capital_letter_O_with_tilde: {
				name: 'Otilde',
				character: 'Õ'
			},
			/*	U+00D5 (213)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter O with tilde*/
			Latin_capital_letter_O_with_diaeresis: {
				name: 'Ouml',
				character: 'Ö'
			},
			/*	U+00D6 (214)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter O with diaeresis*/
			multiplication_sign: {
				name: 'times',
				character: '×'
			},
			/*	U+00D7 (215)		HTML 3.2		HTMLlat1		ISOnum		multiplication sign*/
			Latin_capital_letter_O_with_stroke_: {
				name: 'Oslash',
				character: 'Ø'
			},
			/*	U+00D8 (216)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter O with stroke (= Latin capital letter O slash)*/
			Latin_capital_letter_U_with_grave_accent: {
				name: 'Ugrave',
				character: 'Ù'
			},
			/*	U+00D9 (217)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter U with grave accent*/
			Latin_capital_letter_U_with_acute_accent: {
				name: 'Uacute',
				character: 'Ú'
			},
			/*	U+00DA (218)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter U with acute accent*/
			Latin_capital_letter_U_with_circumflex: {
				name: 'Ucirc',
				character: 'Û'
			},
			/*	U+00DB (219)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter U with circumflex*/
			Latin_capital_letter_U_with_diaeresis: {
				name: 'Uuml',
				character: 'Ü'
			},
			/*	U+00DC (220)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter U with diaeresis*/
			Latin_capital_letter_Y_with_acute_accent: {
				name: 'Yacute',
				character: 'Ý'
			},
			/*	U+00DD (221)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter Y with acute accent*/
			Latin_capital_letter_THORN: {
				name: 'THORN',
				character: 'Þ'
			},
			/*	U+00DE (222)		HTML 2.0		HTMLlat1		ISOlat1		Latin capital letter THORN*/
			Latin_small_letter_sharp_s_: {
				name: 'szlig',
				character: 'ß'
			},
			/*	U+00DF (223)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter sharp s (= ess-zed); see German Eszett*/
			Latin_small_letter_a_with_grave_accent: {
				name: 'agrave',
				character: 'à'
			},
			/*	U+00E0 (224)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter a with grave accent*/
			Latin_small_letter_a_with_acute_accent: {
				name: 'aacute',
				character: 'á'
			},
			/*	U+00E1 (225)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter a with acute accent*/
			Latin_small_letter_a_with_circumflex: {
				name: 'acirc',
				character: 'â'
			},
			/*	U+00E2 (226)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter a with circumflex*/
			Latin_small_letter_a_with_tilde: {
				name: 'atilde',
				character: 'ã'
			},
			/*	U+00E3 (227)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter a with tilde*/
			Latin_small_letter_a_with_diaeresis: {
				name: 'auml',
				character: 'ä'
			},
			/*	U+00E4 (228)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter a with diaeresis*/
			Latin_small_letter_a_with_ring_above: {
				name: 'aring',
				character: 'å'
			},
			/*	U+00E5 (229)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter a with ring above*/
			Latin_small_letter_ae: {
				name: 'aelig',
				character: 'æ'
			},
			/*	U+00E6 (230)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter ae (= Latin small ligature ae)*/
			Latin_small_letter_c_with_cedilla: {
				name: 'ccedil',
				character: 'ç'
			},
			/*	U+00E7 (231)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter c with cedilla*/
			Latin_small_letter_e_with_grave_accent: {
				name: 'egrave',
				character: 'è'
			},
			/*	U+00E8 (232)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter e with grave accent*/
			Latin_small_letter_e_with_acute_accent: {
				name: 'eacute',
				character: 'é'
			},
			/*	U+00E9 (233)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter e with acute accent*/
			Latin_small_letter_e_with_circumflex: {
				name: 'ecirc',
				character: 'ê'
			},
			/*	U+00EA (234)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter e with circumflex*/
			Latin_small_letter_e_with_diaeresis: {
				name: 'euml',
				character: 'ë'
			},
			/*	U+00EB (235)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter e with diaeresis*/
			Latin_small_letter_i_with_grave_accent: {
				name: 'igrave',
				character: 'ì'
			},
			/*	U+00EC (236)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter i with grave accent*/
			Latin_small_letter_i_with_acute_accent: {
				name: 'iacute',
				character: 'í'
			},
			/*	U+00ED (237)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter i with acute accent*/
			Latin_small_letter_i_with_circumflex: {
				name: 'icirc',
				character: 'î'
			},
			/*	U+00EE (238)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter i with circumflex*/
			Latin_small_letter_i_with_diaeresis: {
				name: 'iuml',
				character: 'ï'
			},
			/*	U+00EF (239)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter i with diaeresis*/
			Latin_small_letter_eth: {
				name: 'eth',
				character: 'ð'
			},
			/*	U+00F0 (240)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter eth*/
			Latin_small_letter_n_with_tilde: {
				name: 'ntilde',
				character: 'ñ'
			},
			/*	U+00F1 (241)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter n with tilde*/
			Latin_small_letter_o_with_grave_accent: {
				name: 'ograve',
				character: 'ò'
			},
			/*	U+00F2 (242)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter o with grave accent*/
			Latin_small_letter_o_with_acute_accent: {
				name: 'oacute',
				character: 'ó'
			},
			/*	U+00F3 (243)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter o with acute accent*/
			Latin_small_letter_o_with_circumflex: {
				name: 'ocirc',
				character: 'ô'
			},
			/*	U+00F4 (244)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter o with circumflex*/
			Latin_small_letter_o_with_tilde: {
				name: 'otilde',
				character: 'õ'
			},
			/*	U+00F5 (245)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter o with tilde*/
			Latin_small_letter_o_with_diaeresis: {
				name: 'ouml',
				character: 'ö'
			},
			/*	U+00F6 (246)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter o with diaeresis*/
			division_sign_: {
				name: 'divide',
				character: '÷'
			},
			/*	U+00F7 (247)		HTML 3.2		HTMLlat1		ISOnum		division sign (= obelus)*/
			Latin_small_letter_o_with_stroke_: {
				name: 'oslash',
				character: 'ø'
			},
			/*	U+00F8 (248)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter o with stroke (= Latin small letter o slash)*/
			Latin_small_letter_u_with_grave_accent: {
				name: 'ugrave',
				character: 'ù'
			},
			/*	U+00F9 (249)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter u with grave accent*/
			Latin_small_letter_u_with_acute_accent: {
				name: 'uacute',
				character: 'ú'
			},
			/*	U+00FA (250)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter u with acute accent*/
			Latin_small_letter_u_with_circumflex: {
				name: 'ucirc',
				character: 'û'
			},
			/*	U+00FB (251)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter u with circumflex*/
			Latin_small_letter_u_with_diaeresis: {
				name: 'uuml',
				character: 'ü'
			},
			/*	U+00FC (252)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter u with diaeresis*/
			Latin_small_letter_y_with_acute_accent: {
				name: 'yacute',
				character: 'ý'
			},
			/*	U+00FD (253)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter y with acute accent*/
			Latin_small_letter_thorn: {
				name: 'thorn',
				character: 'þ'
			},
			/*	U+00FE (254)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter thorn*/
			Latin_small_letter_y_with_diaeresis: {
				name: 'yuml',
				character: 'ÿ'
			},
			/*	U+00FF (255)		HTML 2.0		HTMLlat1		ISOlat1		Latin small letter y with diaeresis*/
			Latin_capital_ligature_oe: {
				name: 'OElig',
				character: 'Œ'
			},
			/*U+0152 (338)		HTML 4.0		HTMLspecial		ISOlat2		Latin capital ligature oe[e]*/
			Latin_small_ligature_oe: {
				name: 'oelig',
				character: 'œ'
			},
			/*	U+0153 (339)		HTML 4.0		HTMLspecial		ISOlat2		Latin small ligature oe[e]*/
			Latin_capital_letter_s_with_caron: {
				name: 'Scaron',
				character: 'Š'
			},
			/*	U+0160 (352)		HTML 4.0		HTMLspecial		ISOlat2		Latin capital letter s with caron*/
			Latin_small_letter_s_with_caron: {
				name: 'scaron',
				character: 'š'
			},
			/*	U+0161 (353)		HTML 4.0		HTMLspecial		ISOlat2		Latin small letter s with caron*/
			Latin_capital_letter_y_with_diaeresis: {
				name: 'Yuml',
				character: 'Ÿ'
			},
			/*	U+0178 (376)		HTML 4.0		HTMLspecial		ISOlat2		Latin capital letter y with diaeresis*/
			Latin_small_letter_f_with_hook: {
				name: 'fnof',
				character: 'ƒ'
			},
			/*	U+0192 (402)		HTML 4.0		HTMLsymbol		ISOtech		Latin small letter f with hook (= function = florin)*/
			modifier_letter_circumflex_accent: {
				name: 'circ',
				character: 'ˆ'
			},
			/*	U+02C6 (710)		HTML 4.0		HTMLspecial		ISOpub		modifier letter circumflex accent*/
			small_tilde: {
				name: 'tilde',
				character: '˜'
			},
			/*	U+02DC (732)		HTML 4.0		HTMLspecial		ISOdia		small tilde*/
			Greek_capital_letter_Alpha: {
				name: 'Alpha',
				character: 'Α'
			},
			/*	U+0391 (913)		HTML 4.0		HTMLsymbol			Greek capital letter Alpha*/
			Greek_capital_letter_Beta: {
				name: 'Beta',
				character: 'Β'
			},
			/*	U+0392 (914)		HTML 4.0		HTMLsymbol			Greek capital letter Beta*/
			Greek_capital_letter_Gamma: {
				name: 'Gamma',
				character: 'Γ'
			},
			/*	U+0393 (915)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Gamma*/
			Greek_capital_letter_Delta: {
				name: 'Delta',
				character: 'Δ'
			},
			/*	U+0394 (916)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Delta*/
			Greek_capital_letter_Epsilon: {
				name: 'Epsilon',
				character: 'Ε'
			},
			/*	U+0395 (917)		HTML 4.0		HTMLsymbol			Greek capital letter Epsilon*/
			Greek_capital_letter_Zeta: {
				name: 'Zeta',
				character: 'Ζ'
			},
			/*	U+0396 (918)		HTML 4.0		HTMLsymbol			Greek capital letter Zeta*/
			Greek_capital_letter_Eta: {
				name: 'Eta',
				character: 'Η'
			},
			/*	U+0397 (919)		HTML 4.0		HTMLsymbol			Greek capital letter Eta*/
			Greek_capital_letter_Theta: {
				name: 'Theta',
				character: 'Θ'
			},
			/*	U+0398 (920)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Theta*/
			Greek_capital_letter_Iota: {
				name: 'Iota',
				character: 'Ι'
			},
			/*	U+0399 (921)		HTML 4.0		HTMLsymbol			Greek capital letter Iota*/
			Greek_capital_letter_Kappa: {
				name: 'Kappa',
				character: 'Κ'
			},
			/*	U+039A (922)		HTML 4.0		HTMLsymbol			Greek capital letter Kappa*/
			Greek_capital_letter_Lambda: {
				name: 'Lambda',
				character: 'Λ'
			},
			/*	U+039B (923)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Lambda*/
			Greek_capital_letter_Mu: {
				name: 'Mu',
				character: 'Μ'
			},
			/*	U+039C (924)		HTML 4.0		HTMLsymbol			Greek capital letter Mu*/
			Greek_capital_letter_Nu: {
				name: 'Nu',
				character: 'Ν'
			},
			/*	U+039D (925)		HTML 4.0		HTMLsymbol			Greek capital letter Nu*/
			Greek_capital_letter_Xi: {
				name: 'Xi',
				character: 'Ξ'
			},
			/*	U+039E (926)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Xi*/
			Greek_capital_letter_Omicron: {
				name: 'Omicron',
				character: 'Ο'
			},
			/*	U+039F (927)		HTML 4.0		HTMLsymbol			Greek capital letter Omicron*/
			Greek_capital_letter_Pi: {
				name: 'Pi',
				character: 'Π'
			},
			/*	U+03A0 (928)		HTML 4.0		HTMLsymbol			Greek capital letter Pi*/
			Greek_capital_letter_Rho: {
				name: 'Rho',
				character: 'Ρ'
			},
			/*	U+03A1 (929)		HTML 4.0		HTMLsymbol			Greek capital letter Rho*/
			Greek_capital_letter_Sigma: {
				name: 'Sigma',
				character: 'Σ'
			},
			/*	U+03A3 (931)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Sigma*/
			Greek_capital_letter_Tau: {
				name: 'Tau',
				character: 'Τ'
			},
			/*	U+03A4 (932)		HTML 4.0		HTMLsymbol			Greek capital letter Tau*/
			Greek_capital_letter_Upsilon: {
				name: 'Upsilon',
				character: 'Υ'
			},
			/*	U+03A5 (933)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Upsilon*/
			Greek_capital_letter_Phi: {
				name: 'Phi',
				character: 'Φ'
			},
			/*	U+03A6 (934)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Phi*/
			Greek_capital_letter_Chi: {
				name: 'Chi',
				character: 'Χ'
			},
			/*	U+03A7 (935)		HTML 4.0		HTMLsymbol			Greek capital letter Chi*/
			Greek_capital_letter_Psi: {
				name: 'Psi',
				character: 'Ψ'
			},
			/*	U+03A8 (936)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Psi*/
			Greek_capital_letter_Omega: {
				name: 'Omega',
				character: 'Ω'
			},
			/*	U+03A9 (937)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek capital letter Omega*/
			Greek_small_letter_alpha: {
				name: 'alpha',
				character: 'α'
			},
			/*	U+03B1 (945)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter alpha*/
			Greek_small_letter_beta: {
				name: 'beta',
				character: 'β'
			},
			/*	U+03B2 (946)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter beta*/
			Greek_small_letter_gamma: {
				name: 'gamma',
				character: 'γ'
			},
			/*	U+03B3 (947)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter gamma*/
			Greek_small_letter_delta: {
				name: 'delta',
				character: 'δ'
			},
			/*	U+03B4 (948)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter delta*/
			Greek_small_letter_epsilon: {
				name: 'epsilon',
				character: 'ε'
			},
			/*	U+03B5 (949)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter epsilon*/
			Greek_small_letter_zeta: {
				name: 'zeta',
				character: 'ζ'
			},
			/*	U+03B6 (950)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter zeta*/
			Greek_small_letter_eta: {
				name: 'eta',
				character: 'η'
			},
			/*	U+03B7 (951)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter eta*/
			Greek_small_letter_theta: {
				name: 'theta',
				character: 'θ'
			},
			/*	U+03B8 (952)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter theta*/
			Greek_small_letter_iota: {
				name: 'iota',
				character: 'ι'
			},
			/*	U+03B9 (953)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter iota*/
			Greek_small_letter_kappa: {
				name: 'kappa',
				character: 'κ'
			},
			/*	U+03BA (954)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter kappa*/
			Greek_small_letter_lambda: {
				name: 'lambda',
				character: 'λ'
			},
			/*	U+03BB (955)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter lambda*/
			Greek_small_letter_mu: {
				name: 'mu',
				character: 'μ'
			},
			/*	U+03BC (956)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter mu*/
			Greek_small_letter_nu: {
				name: 'nu',
				character: 'ν'
			},
			/*	U+03BD (957)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter nu*/
			Greek_small_letter_xi: {
				name: 'xi',
				character: 'ξ'
			},
			/*	U+03BE (958)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter xi*/
			Greek_small_letter_omicron: {
				name: 'omicron',
				character: 'ο'
			},
			/*	U+03BF (959)		HTML 4.0		HTMLsymbol		NEW		Greek small letter omicron*/
			Greek_small_letter_pi: {
				name: 'pi',
				character: 'π'
			},
			/*	U+03C0 (960)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter pi*/
			Greek_small_letter_rho: {
				name: 'rho',
				character: 'ρ'
			},
			/*	U+03C1 (961)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter rho*/
			Greek_small_letter_final_sigma: {
				name: 'sigmaf',
				character: 'ς'
			},
			/*	U+03C2 (962)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter final sigma*/
			Greek_small_letter_sigma: {
				name: 'sigma',
				character: 'σ'
			},
			/*	U+03C3 (963)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter sigma*/
			Greek_small_letter_tau: {
				name: 'tau',
				character: 'τ'
			},
			/*	U+03C4 (964)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter tau*/
			Greek_small_letter_upsilon: {
				name: 'upsilon',
				character: 'υ'
			},
			/*	U+03C5 (965)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter upsilon*/
			Greek_small_letter_phi: {
				name: 'phi',
				character: 'φ'
			},
			/*	U+03C6 (966)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter phi*/
			Greek_small_letter_chi: {
				name: 'chi',
				character: 'χ'
			},
			/*	U+03C7 (967)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter chi*/
			Greek_small_letter_psi: {
				name: 'psi',
				character: 'ψ'
			},
			/*	U+03C8 (968)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter psi*/
			Greek_small_letter_omega: {
				name: 'omega',
				character: 'ω'
			},
			/*	U+03C9 (969)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek small letter omega*/
			Greek_theta_symbol: {
				name: 'thetasym',
				character: 'ϑ'
			},
			/*	U+03D1 (977)		HTML 4.0		HTMLsymbol		NEW		Greek theta symbol*/
			Greek_Upsilon_with_hook_symbol: {
				name: 'upsih',
				character: 'ϒ'
			},
			/*	U+03D2 (978)		HTML 4.0		HTMLsymbol		NEW		Greek Upsilon with hook symbol*/
			Greek_pi_symbol: {
				name: 'piv',
				character: 'ϖ'
			},
			/*	U+03D6 (982)		HTML 4.0		HTMLsymbol		ISOgrk3		Greek pi symbol*/
			en_space: {
				name: 'ensp',
				character: ' '
			},
			/*	U+2002 (8194)		HTML 4.0		HTMLspecial		ISOpub		en space[d]*/
			em_space: {
				name: 'emsp',
				character: ' '
			},
			/*	U+2003 (8195)		HTML 4.0		HTMLspecial		ISOpub		em space[d]*/
			thin_space: {
				name: 'thinsp',
				character: ' '
			},
			/*	U+2009 (8201)		HTML 4.0		HTMLspecial		ISOpub		thin space[d]*/
			zero_width_non_joiner: {
				name: 'zwnj',
				character: ' '
			},
			/*	U+200C (8204)		HTML 4.0		HTMLspecial		NEW RFC 2070		zero-width non-joiner*/
			zero_width_joiner: {
				name: 'zwj',
				character: ' '
			},
			/*	U+200D (8205)		HTML 4.0		HTMLspecial		NEW RFC 2070		zero-width joiner*/
			left_to_right_mark: {
				name: 'lrm',
				character: ' '
			},
			/*	U+200E (8206)		HTML 4.0		HTMLspecial		NEW RFC 2070		left-to-right mark*/
			right_to_left_mark: {
				name: 'rlm',
				character: ' '
			},
			/*	U+200F (8207)		HTML 4.0		HTMLspecial		NEW RFC 2070		right-to-left mark*/
			en_dash: {
				name: 'ndash',
				character: '–'
			},
			/*	U+2013 (8211)		HTML 4.0		HTMLspecial		ISOpub		en dash*/
			em_dash: {
				name: 'mdash',
				character: '—'
			},
			/*	U+2014 (8212)		HTML 4.0		HTMLspecial		ISOpub		em dash*/
			left_single_quotation_mark: {
				name: 'lsquo',
				character: '‘'
			},
			/*	U+2018 (8216)		HTML 4.0		HTMLspecial		ISOnum		left single quotation mark*/
			right_single_quotation_mark: {
				name: 'rsquo',
				character: '’'
			},
			/*	U+2019 (8217)		HTML 4.0		HTMLspecial		ISOnum		right single quotation mark*/
			single_low_9_quotation_mark: {
				name: 'sbquo',
				character: '‚'
			},
			/*	U+201A (8218)		HTML 4.0		HTMLspecial		NEW		single low-9 quotation mark*/
			left_double_quotation_mark: {
				name: 'ldquo',
				character: '“'
			},
			/*	U+201C (8220)		HTML 4.0		HTMLspecial		ISOnum		left double quotation mark*/
			right_double_quotation_mark: {
				name: 'rdquo',
				character: '”'
			},
			/*	U+201D (8221)		HTML 4.0		HTMLspecial		ISOnum		right double quotation mark*/
			double_low_9_quotation_mark: {
				name: 'bdquo',
				character: '„'
			},
			/*	U+201E (8222)		HTML 4.0		HTMLspecial		NEW		double low-9 quotation mark*/
			dagger: {
				name: 'dagger',
				character: '†'
			},
			/*	U+2020 (8224)		HTML 4.0		HTMLspecial		ISOpub		dagger, obelisk*/
			double_dagger: {
				name: 'Dagger',
				character: '‡'
			},
			/*	U+2021 (8225)		HTML 4.0		HTMLspecial		ISOpub		double dagger, double obelisk*/
			bullet_: {
				name: 'bull',
				character: '•'
			},
			/*	U+2022 (8226)		HTML 4.0		HTMLspecial		ISOpub		bullet (= black small circle)[f]*/
			horizontal_ellipsis_: {
				name: 'hellip',
				character: '…'
			},
			/*	U+2026 (8230)		HTML 4.0		HTMLsymbol		ISOpub		horizontal ellipsis (= three dot leader)*/
			per_mille_sign: {
				name: 'permil',
				character: '‰'
			},
			/*	U+2030 (8240)		HTML 4.0		HTMLspecial		ISOtech		per mille sign*/
			prime_: {
				name: 'prime',
				character: '′'
			},
			/*	U+2032 (8242)		HTML 4.0		HTMLsymbol		ISOtech		prime (= minutes = feet)*/
			double_prime_: {
				name: 'Prime',
				character: '″'
			},
			/*	U+2033 (8243)		HTML 4.0		HTMLsymbol		ISOtech		double prime (= seconds = inches)*/
			single_left_pointing_angle_quotation_mark: {
				name: 'lsaquo',
				character: '‹'
			},
			/*	U+2039 (8249)		HTML 4.0		HTMLspecial		ISO proposed		single left-pointing angle quotation mark[g]*/
			single_right_pointing_angle_quotation_mark: {
				name: 'rsaquo',
				character: '›'
			},
			/*	U+203A (8250)		HTML 4.0		HTMLspecial		ISO proposed		single right-pointing angle quotation mark[g]*/
			overline: {
				name: 'oline',
				character: '‾'
			},
			/*	U+203E (8254)		HTML 4.0		HTMLsymbol		NEW		overline (= spacing overscore)*/
			fraction_slash: {
				name: 'frasl',
				character: '⁄'
			},
			/*	U+2044 (8260)		HTML 4.0		HTMLsymbol		NEW		fraction slash (= solidus)*/
			euro_sign: {
				name: 'euro',
				character: '€'
			},
			/*	U+20AC (8364)		HTML 4.0		HTMLspecial		NEW		euro sign*/
			black_letter_capital_I: {
				name: 'image',
				character: 'ℑ'
			},
			/*	U+2111 (8465)		HTML 4.0		HTMLsymbol		ISOamso		black-letter capital I (= imaginary part)*/
			script_capital_P: {
				name: 'weierp',
				character: '℘'
			},
			/*	U+2118 (8472)		HTML 4.0		HTMLsymbol		ISOamso		script capital P (= power set = Weierstrass p)*/
			black_letter_capital_R: {
				name: 'real',
				character: 'ℜ'
			},
			/*	U+211C (8476)		HTML 4.0		HTMLsymbol		ISOamso		black-letter capital R (= real part symbol)*/
			trademark_symbol: {
				name: 'trade',
				character: '™'
			},
			/*	U+2122 (8482)		HTML 4.0		HTMLsymbol		ISOnum		trademark symbol*/
			alef_symbol: {
				name: 'alefsym',
				character: 'ℵ'
			},
			/*	U+2135 (8501)		HTML 4.0		HTMLsymbol		NEW		alef symbol (= first transfinite cardinal)[h]*/
			leftwards_arrow: {
				name: 'larr',
				character: '←'
			},
			/*	U+2190 (8592)		HTML 4.0		HTMLsymbol		ISOnum		leftwards arrow*/
			upwards_arrow: {
				name: 'uarr',
				character: '↑'
			},
			/*	U+2191 (8593)		HTML 4.0		HTMLsymbol		ISOnum		upwards arrow*/
			rightwards_arrow: {
				name: 'rarr',
				character: '→'
			},
			/*	U+2192 (8594)		HTML 4.0		HTMLsymbol		ISOnum		rightwards arrow*/
			downwards_arrow: {
				name: 'darr',
				character: '↓'
			},
			/*	U+2193 (8595)		HTML 4.0		HTMLsymbol		ISOnum		downwards arrow*/
			left_right_arrow: {
				name: 'harr',
				character: '↔'
			},
			/*	U+2194 (8596)		HTML 4.0		HTMLsymbol		ISOamsa		left right arrow*/
			downwards_arrow_with_corner_leftwards: {
				name: 'crarr',
				character: '↵'
			},
			/*	U+21B5 (8629)		HTML 4.0		HTMLsymbol		NEW		downwards arrow with corner leftwards (= carriage return)*/
			leftwards_double_arrow: {
				name: 'lArr',
				character: '⇐'
			},
			/*	U+21D0 (8656)		HTML 4.0		HTMLsymbol		ISOtech		leftwards double arrow[i]*/
			upwards_double_arrow: {
				name: 'uArr',
				character: '⇑'
			},
			/*	U+21D1 (8657)		HTML 4.0		HTMLsymbol		ISOamsa		upwards double arrow*/
			rightwards_double_arrow: {
				name: 'rArr',
				character: '⇒'
			},
			/*	U+21D2 (8658)		HTML 4.0		HTMLsymbol		ISOnum		rightwards double arrow[j]*/
			downwards_double_arrow: {
				name: 'dArr',
				character: '⇓'
			},
			/*	U+21D3 (8659)		HTML 4.0		HTMLsymbol		ISOamsa		downwards double arrow*/
			left_right_double_arrow: {
				name: 'hArr',
				character: '⇔'
			},
			/*	U+21D4 (8660)		HTML 4.0		HTMLsymbol		ISOamsa		left right double arrow*/
			for_all: {
				name: 'forall',
				character: '∀'
			},
			/*	U+2200 (8704)		HTML 4.0		HTMLsymbol		ISOtech		for all*/
			partial_differential: {
				name: 'part',
				character: '∂'
			},
			/*	U+2202 (8706)		HTML 4.0		HTMLsymbol		ISOtech		partial differential*/
			there_exists: {
				name: 'exist',
				character: '∃'
			},
			/*	U+2203 (8707)		HTML 4.0		HTMLsymbol		ISOtech		there exists*/
			empty_set: {
				name: 'empty',
				character: '∅'
			},
			/*	U+2205 (8709)		HTML 4.0		HTMLsymbol		ISOamso		empty set (= null set = diameter) but see also U+8960, ⌀*/
			nabla: {
				name: 'nabla',
				character: '∇'
			},
			/*	U+2207 (8711)		HTML 4.0		HTMLsymbol		ISOtech		nabla (= backward difference)*/
			element_of: {
				name: 'isin',
				character: '∈'
			},
			/*	U+2208 (8712)		HTML 4.0		HTMLsymbol		ISOtech		element of*/
			not_an_element_of: {
				name: 'notin',
				character: '∉'
			},
			/*	U+2209 (8713)		HTML 4.0		HTMLsymbol		ISOtech		not an element of*/
			contains_as_member: {
				name: 'ni',
				character: '∋'
			},
			/*	U+220B (8715)		HTML 4.0		HTMLsymbol		ISOtech		contains as member*/
			n_ary_product: {
				name: 'prod',
				character: '∏'
			},
			/*	U+220F (8719)		HTML 4.0		HTMLsymbol		ISOamsb		n-ary product (= product sign)[k]*/
			n_ary_summation: {
				name: 'sum',
				character: '∑'
			},
			/*	U+2211 (8721)		HTML 4.0		HTMLsymbol		ISOamsb		n-ary summation[l]*/
			minus_sign: {
				name: 'minus',
				character: '−'
			},
			/*	U+2212 (8722)		HTML 4.0		HTMLsymbol		ISOtech		minus sign*/
			asterisk_operator: {
				name: 'lowast',
				character: '∗'
			},
			/*	U+2217 (8727)		HTML 4.0		HTMLsymbol		ISOtech		asterisk operator*/
			square_root: {
				name: 'radic',
				character: '√'
			},
			/*	U+221A (8730)		HTML 4.0		HTMLsymbol		ISOtech		square root (= radical sign)*/
			proportional_to: {
				name: 'prop',
				character: '∝'
			},
			/*	U+221D (8733)		HTML 4.0		HTMLsymbol		ISOtech		proportional to*/
			infinity: {
				name: 'infin',
				character: '∞'
			},
			/*	U+221E (8734)		HTML 4.0		HTMLsymbol		ISOtech		infinity*/
			angle: {
				name: 'ang',
				character: '∠'
			},
			/*	U+2220 (8736)		HTML 4.0		HTMLsymbol		ISOamso		angle*/
			logical_and_: {
				name: 'and',
				character: '∧'
			},
			/*	U+2227 (8743)		HTML 4.0		HTMLsymbol		ISOtech		logical and (= wedge)*/
			logical_or_: {
				name: 'or',
				character: '∨'
			},
			/*	U+2228 (8744)		HTML 4.0		HTMLsymbol		ISOtech		logical or (= vee)*/
			intersection: {
				name: 'cap',
				character: '∩'
			},
			/*	U+2229 (8745)		HTML 4.0		HTMLsymbol		ISOtech		intersection (= cap)*/
			union: {
				name: 'cup',
				character: '∪'
			},
			/*	U+222A (8746)		HTML 4.0		HTMLsymbol		ISOtech		union (= cup)*/
			integral: {
				name: 'int',
				character: '∫'
			},
			/*	U+222B (8747)		HTML 4.0		HTMLsymbol		ISOtech		integral*/
			therefore_sign: {
				name: 'there4',
				character: '∴'
			},
			/*	U+2234 (8756)		HTML 4.0		HTMLsymbol		ISOtech		therefore sign*/
			tilde_operator_: {
				name: 'sim',
				character: '∼'
			},
			/*	U+223C (8764)		HTML 4.0		HTMLsymbol		ISOtech		tilde operator (= varies with = similar to)[m]*/
			congruent_to: {
				name: 'cong',
				character: '≅'
			},
			/*	U+2245 (8773)		HTML 4.0		HTMLsymbol		ISOtech		congruent to*/
			almost_equal_to: {
				name: 'asymp',
				character: '≈'
			},
			/*	U+2248 (8776)		HTML 4.0		HTMLsymbol		ISOamsr		almost equal to (= asymptotic to)*/
			not_equal_to: {
				name: 'ne',
				character: '≠'
			},
			/*	U+2260 (8800)		HTML 4.0		HTMLsymbol		ISOtech		not equal to*/
			identical_to: {
				name: 'equiv',
				character: '≡'
			},
			equivalent_to: {
				name: 'equiv',
				character: '≡'
			},
			/*	U+2261 (8801)		HTML 4.0		HTMLsymbol		ISOtech		identical to; sometimes used for 'equivalent to'*/
			less_than_or_equal_to: {
				name: 'le',
				character: '≤'
			},
			/*	U+2264 (8804)		HTML 4.0		HTMLsymbol		ISOtech		less-than or equal to*/
			greater_than_or_equal_to: {
				name: 'ge',
				character: '≥'
			},
			/*	U+2265 (8805)		HTML 4.0		HTMLsymbol		ISOtech		greater-than or equal to*/
			subset_of: {
				name: 'sub',
				character: '⊂'
			},
			/*	U+2282 (8834)		HTML 4.0		HTMLsymbol		ISOtech		subset of*/
			superset_of: {
				name: 'sup',
				character: '⊃'
			},
			/*	U+2283 (8835)		HTML 4.0		HTMLsymbol		ISOtech		superset of[n]*/
			not_a_subset_of: {
				name: 'nsub',
				character: '⊄'
			},
			/*	U+2284 (8836)		HTML 4.0		HTMLsymbol		ISOamsn		not a subset of*/
			subset_of_or_equal_to: {
				name: 'sube',
				character: '⊆'
			},
			/*	U+2286 (8838)		HTML 4.0		HTMLsymbol		ISOtech		subset of or equal to*/
			superset_of_or_equal_to: {
				name: 'supe',
				character: '⊇'
			},
			/*	U+2287 (8839)		HTML 4.0		HTMLsymbol		ISOtech		superset of or equal to*/
			circled_plus: {
				name: 'oplus',
				character: '⊕'
			},
			/*	U+2295 (8853)		HTML 4.0		HTMLsymbol		ISOamsb		circled plus (= direct sum)*/
			circled_times: {
				name: 'otimes',
				character: '⊗'
			},
			/*	U+2297 (8855)		HTML 4.0		HTMLsymbol		ISOamsb		circled times (= vector product)*/
			up_tack: {
				name: 'perp',
				character: '⊥'
			},
			/*	U+22A5 (8869)		HTML 4.0		HTMLsymbol		ISOtech		up tack (= orthogonal to = perpendicular)[o]*/
			dot_operator: {
				name: 'sdot',
				character: '⋅'
			},
			/*	U+22C5 (8901)		HTML 4.0		HTMLsymbol		ISOamsb		dot operator[p]*/
			vertical_ellipsis: {
				name: 'vellip',
				character: '⋮'
			},
			/*	U+22EE (8942)		HTML 5.0		?		?		vertical ellipsis*/
			left_ceiling: {
				name: 'lceil',
				character: '⌈'
			},
			/*	U+2308 (8968)		HTML 4.0		HTMLsymbol		ISOamsc		left ceiling (= APL upstile)*/
			right_ceiling: {
				name: 'rceil',
				character: '⌉'
			},
			/*	U+2309 (8969)		HTML 4.0		HTMLsymbol		ISOamsc		right ceiling*/
			left_floor: {
				name: 'lfloor',
				character: '⌊'
			},
			/*	U+230A (8970)		HTML 4.0		HTMLsymbol		ISOamsc		left floor (= APL downstile)*/
			right_floor: {
				name: 'rfloor',
				character: '⌋'
			},
			/*	U+230B (8971)		HTML 4.0		HTMLsymbol		ISOamsc		right floor*/
			left_pointing_angle_bracket_: {
				name: 'lang',
				character: '〈'
			},
			/*	U+2329 (9001)		HTML 4.0		HTMLsymbol		ISOtech		left-pointing angle bracket (= bra)[q]*/
			right_pointing_angle_bracket_: {
				name: 'rang',
				character: '〉'
			},
			/*	U+232A (9002)		HTML 4.0		HTMLsymbol		ISOtech		right-pointing angle bracket (= ket)[r]*/
			lozenge: {
				name: 'loz',
				character: '◊'
			},
			/*	U+25CA (9674)		HTML 4.0		HTMLsymbol		ISOpub		lozenge*/
			black_spade_suit: {
				name: 'spades',
				character: '♠'
			},
			/*	U+2660 (9824)		HTML 4.0		HTMLsymbol		ISOpub		black spade suit[f]*/
			black_club_suit_: {
				name: 'clubs',
				character: '♣'
			},
			/*	U+2663 (9827)		HTML 4.0		HTMLsymbol		ISOpub		black club suit (= shamrock)[f]*/
			black_heart_suit_: {
				name: 'hearts',
				character: '♥'
			},
			/*	U+2665 (9829)		HTML 4.0		HTMLsymbol		ISOpub		black heart suit (= valentine)[f]*/
			black_diamond_suit: {
				name: 'diams',
				character: '♦'
			}
			/*	U+2666 (9830)		HTML 4.0		HTMLsymbol		ISOpub		black diamond suit[f]*/
		}, externalCharacterNameMap = {
				colon: {
					name: 'colon',
					character: ':'
				},
				semicolon: {
					name: 'semicolon',
					character: ';'
				},
				'return': {
					name: 'return',
					character: '\r'
				},
				nextLine: {
					name: 'nextLine',
					character: '\n'
				}
			}, characterNameDict = {
				'"': {
					'name': 'quot',
					'description': 'quotation_mark'
				},
				'&': {
					'name': 'amp',
					'description': 'ampersand'
				},
				'&apos': {
					'name': 'apos',
					'description': 'apostrophe'
				},
				'<': {
					'name': 'lt',
					'description': 'less_than_sign'
				},
				'>': {
					'name': 'gt',
					'description': 'greater_than_sign'
				},
				' ': {
					'name': 'rlm',
					'description': 'right_to_left_mark'
				},
				'¡': {
					'name': 'iexcl',
					'description': 'inverted_exclamation_mark'
				},
				'¢': {
					'name': 'cent',
					'description': 'cent_sign'
				},
				'£': {
					'name': 'pound',
					'description': 'pound_sign'
				},
				'¤': {
					'name': 'curren',
					'description': 'currency_sign'
				},
				'¥': {
					'name': 'yen',
					'description': 'yen_sign'
				},
				'¦': {
					'name': 'brvbar',
					'description': 'broken_bar'
				},
				'§': {
					'name': 'sect',
					'description': 'section_sign'
				},
				'¨': {
					'name': 'uml',
					'description': 'diaeresis'
				},
				'©': {
					'name': 'copy',
					'description': 'copyright_symbol'
				},
				'ª': {
					'name': 'ordf',
					'description': 'feminine_ordinal_indicator'
				},
				'«': {
					'name': 'laquo',
					'description': 'left_pointing_double_angle_quotation_mark'
				},
				'¬': {
					'name': 'not',
					'description': 'not_sign'
				},
				'®': {
					'name': 'reg',
					'description': 'registered_sign'
				},
				'¯': {
					'name': 'macr',
					'description': 'macron'
				},
				'°': {
					'name': 'deg',
					'description': 'degree_symbol'
				},
				'±': {
					'name': 'plusmn',
					'description': 'plus_minus_sign'
				},
				'²': {
					'name': 'sup2',
					'description': 'superscript_two'
				},
				'³': {
					'name': 'sup3',
					'description': 'superscript_three'
				},
				'´': {
					'name': 'acute',
					'description': 'acute_accent'
				},
				'µ': {
					'name': 'micro',
					'description': 'micro_sign'
				},
				'¶': {
					'name': 'para',
					'description': 'pilcrow_sign'
				},
				'·': {
					'name': 'middot',
					'description': 'middle_dot'
				},
				'¸': {
					'name': 'cedil',
					'description': 'cedilla'
				},
				'¹': {
					'name': 'sup1',
					'description': 'superscript_one'
				},
				'º': {
					'name': 'ordm',
					'description': 'masculine_ordinal_indicator'
				},
				'»': {
					'name': 'raquo',
					'description': 'right_pointing_double_angle_quotation_mark'
				},
				'¼': {
					'name': 'frac14',
					'description': 'vulgar_fraction_one_quarter'
				},
				'½': {
					'name': 'frac12',
					'description': 'vulgar_fraction_one_half'
				},
				'¾': {
					'name': 'frac34',
					'description': 'vulgar_fraction_three_quarters'
				},
				'¿': {
					'name': 'iquest',
					'description': 'inverted_question_mark'
				},
				'À': {
					'name': 'Agrave',
					'description': 'Latin_capital_letter_A_with_grave_accent'
				},
				'Á': {
					'name': 'Aacute',
					'description': 'Latin_capital_letter_A_with_acute_accent'
				},
				'Â': {
					'name': 'Acirc',
					'description': 'Latin_capital_letter_A_with_circumflex'
				},
				'Ã': {
					'name': 'Atilde',
					'description': 'Latin_capital_letter_A_with_tilde'
				},
				'Ä': {
					'name': 'Auml',
					'description': 'Latin_capital_letter_A_with_diaeresis'
				},
				'Å': {
					'name': 'Aring',
					'description': 'Latin_capital_letter_A_with_ring_above'
				},
				'Æ': {
					'name': 'AElig',
					'description': 'Latin_capital_letter_AE'
				},
				'Ç': {
					'name': 'Ccedil',
					'description': 'Latin_capital_letter_C_with_cedilla'
				},
				'È': {
					'name': 'Egrave',
					'description': 'Latin_capital_letter_E_with_grave_accent'
				},
				'É': {
					'name': 'Eacute',
					'description': 'Latin_capital_letter_E_with_acute_accent'
				},
				'Ê': {
					'name': 'Ecirc',
					'description': 'Latin_capital_letter_E_with_circumflex'
				},
				'Ë': {
					'name': 'Euml',
					'description': 'Latin_capital_letter_E_with_diaeresis'
				},
				'Ì': {
					'name': 'Igrave',
					'description': 'Latin_capital_letter_I_with_grave_accent'
				},
				'Í': {
					'name': 'Iacute',
					'description': 'Latin_capital_letter_I_with_acute_accent'
				},
				'Î': {
					'name': 'Icirc',
					'description': 'Latin_capital_letter_I_with_circumflex'
				},
				'Ï': {
					'name': 'Iuml',
					'description': 'Latin_capital_letter_I_with_diaeresis'
				},
				'Ð': {
					'name': 'ETH',
					'description': 'Latin_capital_letter_Eth'
				},
				'Ñ': {
					'name': 'Ntilde',
					'description': 'Latin_capital_letter_N_with_tilde'
				},
				'Ò': {
					'name': 'Ograve',
					'description': 'Latin_capital_letter_O_with_grave_accent'
				},
				'Ó': {
					'name': 'Oacute',
					'description': 'Latin_capital_letter_O_with_acute_accent'
				},
				'Ô': {
					'name': 'Ocirc',
					'description': 'Latin_capital_letter_O_with_circumflex'
				},
				'Õ': {
					'name': 'Otilde',
					'description': 'Latin_capital_letter_O_with_tilde'
				},
				'Ö': {
					'name': 'Ouml',
					'description': 'Latin_capital_letter_O_with_diaeresis'
				},
				'×': {
					'name': 'times',
					'description': 'multiplication_sign'
				},
				'Ø': {
					'name': 'Oslash',
					'description': 'Latin_capital_letter_O_with_stroke_'
				},
				'Ù': {
					'name': 'Ugrave',
					'description': 'Latin_capital_letter_U_with_grave_accent'
				},
				'Ú': {
					'name': 'Uacute',
					'description': 'Latin_capital_letter_U_with_acute_accent'
				},
				'Û': {
					'name': 'Ucirc',
					'description': 'Latin_capital_letter_U_with_circumflex'
				},
				'Ü': {
					'name': 'Uuml',
					'description': 'Latin_capital_letter_U_with_diaeresis'
				},
				'Ý': {
					'name': 'Yacute',
					'description': 'Latin_capital_letter_Y_with_acute_accent'
				},
				'Þ': {
					'name': 'THORN',
					'description': 'Latin_capital_letter_THORN'
				},
				'ß': {
					'name': 'szlig',
					'description': 'Latin_small_letter_sharp_s_'
				},
				'à': {
					'name': 'agrave',
					'description': 'Latin_small_letter_a_with_grave_accent'
				},
				'á': {
					'name': 'aacute',
					'description': 'Latin_small_letter_a_with_acute_accent'
				},
				'â': {
					'name': 'acirc',
					'description': 'Latin_small_letter_a_with_circumflex'
				},
				'ã': {
					'name': 'atilde',
					'description': 'Latin_small_letter_a_with_tilde'
				},
				'ä': {
					'name': 'auml',
					'description': 'Latin_small_letter_a_with_diaeresis'
				},
				'å': {
					'name': 'aring',
					'description': 'Latin_small_letter_a_with_ring_above'
				},
				'æ': {
					'name': 'aelig',
					'description': 'Latin_small_letter_ae'
				},
				'ç': {
					'name': 'ccedil',
					'description': 'Latin_small_letter_c_with_cedilla'
				},
				'è': {
					'name': 'egrave',
					'description': 'Latin_small_letter_e_with_grave_accent'
				},
				'é': {
					'name': 'eacute',
					'description': 'Latin_small_letter_e_with_acute_accent'
				},
				'ê': {
					'name': 'ecirc',
					'description': 'Latin_small_letter_e_with_circumflex'
				},
				'ë': {
					'name': 'euml',
					'description': 'Latin_small_letter_e_with_diaeresis'
				},
				'ì': {
					'name': 'igrave',
					'description': 'Latin_small_letter_i_with_grave_accent'
				},
				'í': {
					'name': 'iacute',
					'description': 'Latin_small_letter_i_with_acute_accent'
				},
				'î': {
					'name': 'icirc',
					'description': 'Latin_small_letter_i_with_circumflex'
				},
				'ï': {
					'name': 'iuml',
					'description': 'Latin_small_letter_i_with_diaeresis'
				},
				'ð': {
					'name': 'eth',
					'description': 'Latin_small_letter_eth'
				},
				'ñ': {
					'name': 'ntilde',
					'description': 'Latin_small_letter_n_with_tilde'
				},
				'ò': {
					'name': 'ograve',
					'description': 'Latin_small_letter_o_with_grave_accent'
				},
				'ó': {
					'name': 'oacute',
					'description': 'Latin_small_letter_o_with_acute_accent'
				},
				'ô': {
					'name': 'ocirc',
					'description': 'Latin_small_letter_o_with_circumflex'
				},
				'õ': {
					'name': 'otilde',
					'description': 'Latin_small_letter_o_with_tilde'
				},
				'ö': {
					'name': 'ouml',
					'description': 'Latin_small_letter_o_with_diaeresis'
				},
				'÷': {
					'name': 'divide',
					'description': 'division_sign_'
				},
				'ø': {
					'name': 'oslash',
					'description': 'Latin_small_letter_o_with_stroke_'
				},
				'ù': {
					'name': 'ugrave',
					'description': 'Latin_small_letter_u_with_grave_accent'
				},
				'ú': {
					'name': 'uacute',
					'description': 'Latin_small_letter_u_with_acute_accent'
				},
				'û': {
					'name': 'ucirc',
					'description': 'Latin_small_letter_u_with_circumflex'
				},
				'ü': {
					'name': 'uuml',
					'description': 'Latin_small_letter_u_with_diaeresis'
				},
				'ý': {
					'name': 'yacute',
					'description': 'Latin_small_letter_y_with_acute_accent'
				},
				'þ': {
					'name': 'thorn',
					'description': 'Latin_small_letter_thorn'
				},
				'ÿ': {
					'name': 'yuml',
					'description': 'Latin_small_letter_y_with_diaeresis'
				},
				'Œ': {
					'name': 'OElig',
					'description': 'Latin_capital_ligature_oe'
				},
				'œ': {
					'name': 'oelig',
					'description': 'Latin_small_ligature_oe'
				},
				'Š': {
					'name': 'Scaron',
					'description': 'Latin_capital_letter_s_with_caron'
				},
				'š': {
					'name': 'scaron',
					'description': 'Latin_small_letter_s_with_caron'
				},
				'Ÿ': {
					'name': 'Yuml',
					'description': 'Latin_capital_letter_y_with_diaeresis'
				},
				'ƒ': {
					'name': 'fnof',
					'description': 'Latin_small_letter_f_with_hook'
				},
				'ˆ': {
					'name': 'circ',
					'description': 'modifier_letter_circumflex_accent'
				},
				'˜': {
					'name': 'tilde',
					'description': 'small_tilde'
				},
				'Α': {
					'name': 'Alpha',
					'description': 'Greek_capital_letter_Alpha'
				},
				'Β': {
					'name': 'Beta',
					'description': 'Greek_capital_letter_Beta'
				},
				'Γ': {
					'name': 'Gamma',
					'description': 'Greek_capital_letter_Gamma'
				},
				'Δ': {
					'name': 'Delta',
					'description': 'Greek_capital_letter_Delta'
				},
				'Ε': {
					'name': 'Epsilon',
					'description': 'Greek_capital_letter_Epsilon'
				},
				'Ζ': {
					'name': 'Zeta',
					'description': 'Greek_capital_letter_Zeta'
				},
				'Η': {
					'name': 'Eta',
					'description': 'Greek_capital_letter_Eta'
				},
				'Θ': {
					'name': 'Theta',
					'description': 'Greek_capital_letter_Theta'
				},
				'Ι': {
					'name': 'Iota',
					'description': 'Greek_capital_letter_Iota'
				},
				'Κ': {
					'name': 'Kappa',
					'description': 'Greek_capital_letter_Kappa'
				},
				'Λ': {
					'name': 'Lambda',
					'description': 'Greek_capital_letter_Lambda'
				},
				'Μ': {
					'name': 'Mu',
					'description': 'Greek_capital_letter_Mu'
				},
				'Ν': {
					'name': 'Nu',
					'description': 'Greek_capital_letter_Nu'
				},
				'Ξ': {
					'name': 'Xi',
					'description': 'Greek_capital_letter_Xi'
				},
				'Ο': {
					'name': 'Omicron',
					'description': 'Greek_capital_letter_Omicron'
				},
				'Π': {
					'name': 'Pi',
					'description': 'Greek_capital_letter_Pi'
				},
				'Ρ': {
					'name': 'Rho',
					'description': 'Greek_capital_letter_Rho'
				},
				'Σ': {
					'name': 'Sigma',
					'description': 'Greek_capital_letter_Sigma'
				},
				'Τ': {
					'name': 'Tau',
					'description': 'Greek_capital_letter_Tau'
				},
				'Υ': {
					'name': 'Upsilon',
					'description': 'Greek_capital_letter_Upsilon'
				},
				'Φ': {
					'name': 'Phi',
					'description': 'Greek_capital_letter_Phi'
				},
				'Χ': {
					'name': 'Chi',
					'description': 'Greek_capital_letter_Chi'
				},
				'Ψ': {
					'name': 'Psi',
					'description': 'Greek_capital_letter_Psi'
				},
				'Ω': {
					'name': 'Omega',
					'description': 'Greek_capital_letter_Omega'
				},
				'α': {
					'name': 'alpha',
					'description': 'Greek_small_letter_alpha'
				},
				'β': {
					'name': 'beta',
					'description': 'Greek_small_letter_beta'
				},
				'γ': {
					'name': 'gamma',
					'description': 'Greek_small_letter_gamma'
				},
				'δ': {
					'name': 'delta',
					'description': 'Greek_small_letter_delta'
				},
				'ε': {
					'name': 'epsilon',
					'description': 'Greek_small_letter_epsilon'
				},
				'ζ': {
					'name': 'zeta',
					'description': 'Greek_small_letter_zeta'
				},
				'η': {
					'name': 'eta',
					'description': 'Greek_small_letter_eta'
				},
				'θ': {
					'name': 'theta',
					'description': 'Greek_small_letter_theta'
				},
				'ι': {
					'name': 'iota',
					'description': 'Greek_small_letter_iota'
				},
				'κ': {
					'name': 'kappa',
					'description': 'Greek_small_letter_kappa'
				},
				'λ': {
					'name': 'lambda',
					'description': 'Greek_small_letter_lambda'
				},
				'μ': {
					'name': 'mu',
					'description': 'Greek_small_letter_mu'
				},
				'ν': {
					'name': 'nu',
					'description': 'Greek_small_letter_nu'
				},
				'ξ': {
					'name': 'xi',
					'description': 'Greek_small_letter_xi'
				},
				'ο': {
					'name': 'omicron',
					'description': 'Greek_small_letter_omicron'
				},
				'π': {
					'name': 'pi',
					'description': 'Greek_small_letter_pi'
				},
				'ρ': {
					'name': 'rho',
					'description': 'Greek_small_letter_rho'
				},
				'ς': {
					'name': 'sigmaf',
					'description': 'Greek_small_letter_final_sigma'
				},
				'σ': {
					'name': 'sigma',
					'description': 'Greek_small_letter_sigma'
				},
				'τ': {
					'name': 'tau',
					'description': 'Greek_small_letter_tau'
				},
				'υ': {
					'name': 'upsilon',
					'description': 'Greek_small_letter_upsilon'
				},
				'φ': {
					'name': 'phi',
					'description': 'Greek_small_letter_phi'
				},
				'χ': {
					'name': 'chi',
					'description': 'Greek_small_letter_chi'
				},
				'ψ': {
					'name': 'psi',
					'description': 'Greek_small_letter_psi'
				},
				'ω': {
					'name': 'omega',
					'description': 'Greek_small_letter_omega'
				},
				'ϑ': {
					'name': 'thetasym',
					'description': 'Greek_theta_symbol'
				},
				'ϒ': {
					'name': 'upsih',
					'description': 'Greek_Upsilon_with_hook_symbol'
				},
				'ϖ': {
					'name': 'piv',
					'description': 'Greek_pi_symbol'
				},
				' ': {
					'name': 'ensp',
					'description': 'en_space'
				},
				' ': {
					'name': 'emsp',
					'description': 'em_space'
				},
				' ': {
					'name': 'thinsp',
					'description': 'thin_space'
				},
				'–': {
					'name': 'ndash',
					'description': 'en_dash'
				},
				'—': {
					'name': 'mdash',
					'description': 'em_dash'
				},
				'‘': {
					'name': 'lsquo',
					'description': 'left_single_quotation_mark'
				},
				'’': {
					'name': 'rsquo',
					'description': 'right_single_quotation_mark'
				},
				'‚': {
					'name': 'sbquo',
					'description': 'single_low_9_quotation_mark'
				},
				'“': {
					'name': 'ldquo',
					'description': 'left_double_quotation_mark'
				},
				'”': {
					'name': 'rdquo',
					'description': 'right_double_quotation_mark'
				},
				'„': {
					'name': 'bdquo',
					'description': 'double_low_9_quotation_mark'
				},
				'†': {
					'name': 'dagger',
					'description': 'dagger'
				},
				'‡': {
					'name': 'Dagger',
					'description': 'double_dagger'
				},
				'•': {
					'name': 'bull',
					'description': 'bullet_'
				},
				'…': {
					'name': 'hellip',
					'description': 'horizontal_ellipsis_'
				},
				'‰': {
					'name': 'permil',
					'description': 'per_mille_sign'
				},
				'′': {
					'name': 'prime',
					'description': 'prime_'
				},
				'″': {
					'name': 'Prime',
					'description': 'double_prime_'
				},
				'‹': {
					'name': 'lsaquo',
					'description': 'single_left_pointing_angle_quotation_mark'
				},
				'›': {
					'name': 'rsaquo',
					'description': 'single_right_pointing_angle_quotation_mark'
				},
				'‾': {
					'name': 'oline',
					'description': 'overline'
				},
				'⁄': {
					'name': 'frasl',
					'description': 'fraction_slash'
				},
				'€': {
					'name': 'euro',
					'description': 'euro_sign'
				},
				'ℑ': {
					'name': 'image',
					'description': 'black_letter_capital_I'
				},
				'℘': {
					'name': 'weierp',
					'description': 'script_capital_P'
				},
				'ℜ': {
					'name': 'real',
					'description': 'black_letter_capital_R'
				},
				'™': {
					'name': 'trade',
					'description': 'trademark_symbol'
				},
				'ℵ': {
					'name': 'alefsym',
					'description': 'alef_symbol'
				},
				'←': {
					'name': 'larr',
					'description': 'leftwards_arrow'
				},
				'↑': {
					'name': 'uarr',
					'description': 'upwards_arrow'
				},
				'→': {
					'name': 'rarr',
					'description': 'rightwards_arrow'
				},
				'↓': {
					'name': 'darr',
					'description': 'downwards_arrow'
				},
				'↔': {
					'name': 'harr',
					'description': 'left_right_arrow'
				},
				'↵': {
					'name': 'crarr',
					'description': 'downwards_arrow_with_corner_leftwards'
				},
				'⇐': {
					'name': 'lArr',
					'description': 'leftwards_double_arrow'
				},
				'⇑': {
					'name': 'uArr',
					'description': 'upwards_double_arrow'
				},
				'⇒': {
					'name': 'rArr',
					'description': 'rightwards_double_arrow'
				},
				'⇓': {
					'name': 'dArr',
					'description': 'downwards_double_arrow'
				},
				'⇔': {
					'name': 'hArr',
					'description': 'left_right_double_arrow'
				},
				'∀': {
					'name': 'forall',
					'description': 'for_all'
				},
				'∂': {
					'name': 'part',
					'description': 'partial_differential'
				},
				'∃': {
					'name': 'exist',
					'description': 'there_exists'
				},
				'∅': {
					'name': 'empty',
					'description': 'empty_set'
				},
				'∇': {
					'name': 'nabla',
					'description': 'nabla'
				},
				'∈': {
					'name': 'isin',
					'description': 'element_of'
				},
				'∉': {
					'name': 'notin',
					'description': 'not_an_element_of'
				},
				'∋': {
					'name': 'ni',
					'description': 'contains_as_member'
				},
				'∏': {
					'name': 'prod',
					'description': 'n_ary_product'
				},
				'∑': {
					'name': 'sum',
					'description': 'n_ary_summation'
				},
				'−': {
					'name': 'minus',
					'description': 'minus_sign'
				},
				'∗': {
					'name': 'lowast',
					'description': 'asterisk_operator'
				},
				'√': {
					'name': 'radic',
					'description': 'square_root'
				},
				'∝': {
					'name': 'prop',
					'description': 'proportional_to'
				},
				'∞': {
					'name': 'infin',
					'description': 'infinity'
				},
				'∠': {
					'name': 'ang',
					'description': 'angle'
				},
				'∧': {
					'name': 'and',
					'description': 'logical_and_'
				},
				'∨': {
					'name': 'or',
					'description': 'logical_or_'
				},
				'∩': {
					'name': 'cap',
					'description': 'intersection'
				},
				'∪': {
					'name': 'cup',
					'description': 'union'
				},
				'∫': {
					'name': 'int',
					'description': 'integral'
				},
				'∴': {
					'name': 'there4',
					'description': 'therefore_sign'
				},
				'∼': {
					'name': 'sim',
					'description': 'tilde_operator_'
				},
				'≅': {
					'name': 'cong',
					'description': 'congruent_to'
				},
				'≈': {
					'name': 'asymp',
					'description': 'almost_equal_to'
				},
				'≠': {
					'name': 'ne',
					'description': 'not_equal_to'
				},
				'≡': {
					'name': 'equiv',
					'description': 'equivalent_to'
				},
				'≤': {
					'name': 'le',
					'description': 'less_than_or_equal_to'
				},
				'≥': {
					'name': 'ge',
					'description': 'greater_than_or_equal_to'
				},
				'⊂': {
					'name': 'sub',
					'description': 'subset_of'
				},
				'⊃': {
					'name': 'sup',
					'description': 'superset_of'
				},
				'⊄': {
					'name': 'nsub',
					'description': 'not_a_subset_of'
				},
				'⊆': {
					'name': 'sube',
					'description': 'subset_of_or_equal_to'
				},
				'⊇': {
					'name': 'supe',
					'description': 'superset_of_or_equal_to'
				},
				'⊕': {
					'name': 'oplus',
					'description': 'circled_plus'
				},
				'⊗': {
					'name': 'otimes',
					'description': 'circled_times'
				},
				'⊥': {
					'name': 'perp',
					'description': 'up_tack'
				},
				'⋅': {
					'name': 'sdot',
					'description': 'dot_operator'
				},
				'⋮': {
					'name': 'vellip',
					'description': 'vertical_ellipsis'
				},
				'⌈': {
					'name': 'lceil',
					'description': 'left_ceiling'
				},
				'⌉': {
					'name': 'rceil',
					'description': 'right_ceiling'
				},
				'⌊': {
					'name': 'lfloor',
					'description': 'left_floor'
				},
				'⌋': {
					'name': 'rfloor',
					'description': 'right_floor'
				},
				'〈': {
					'name': 'lang',
					'description': 'left_pointing_angle_bracket_'
				},
				'〉': {
					'name': 'rang',
					'description': 'right_pointing_angle_bracket_'
				},
				'◊': {
					'name': 'loz',
					'description': 'lozenge'
				},
				'♠': {
					'name': 'spades',
					'description': 'black_spade_suit'
				},
				'♣': {
					'name': 'clubs',
					'description': 'black_club_suit_'
				},
				'♥': {
					'name': 'hearts',
					'description': 'black_heart_suit_'
				},
				'♦': {
					'name': 'diams',
					'description': 'black_diamond_suit'
				}
			}, externalCharacterNameDict = {
				':': {
					'name': 'colon',
					'description': 'colon'
				},
				';': {
					'name': 'semicolon',
					'description': 'semicolon'
				},
				'\r': {
					'name': 'carriageReturn',
					'description': 'carriage_return'
				},
				'\n': {
					'name': 'lineFeed',
					'description': 'line_feed'
				}
			}, prop, i, regexp, characterNameMapItem, externalCharacterNameMapItem, characterAryLength, characterAryItem;
		for (prop in characterNameMap) {
			characterNameMapItem = characterNameMap[prop];
			characterNameDict[characterNameMapItem.character] = characterNameMapItem.name;
		}
		for (prop in externalCharacterNameMap) {
			externalCharacterNameMapItem = externalCharacterNameMap[prop];
			externalCharacterNameDict[externalCharacterNameMapItem.character] = externalCharacterNameMapItem.name;
		}
		if (characterAry === undefined) {
			for (prop in characterNameMap) {
				regexp = new RegExp(characterNameMap[prop].character, 'g');
				targetStr = targetStr.replace(regexp, '&' + characterNameMap[prop].name);
			}
		} else if (typeOf(characterAry, 'array') === true) {
			characterAryLength = characterAry.length;
			for (i = 0; i < characterAryLength; i++) {
				characterAryItem = characterAry[i];
				if (characterNameDict[characterAryItem] === undefined) {
					continue;
				}
				regexp = new RegExp(characterAryItem, 'g');
				targetStr = targetStr.replace(regexp, '&' + characterNameDict[characterAryItem]);
			}
			for (i = 0; i < characterAryLength; i++) {
				characterAryItem = characterAry[i];
				if (externalCharacterNameDict[characterAryItem] === undefined) {
					continue;
				}
				regexp = new RegExp(characterAryItem, 'g');
				targetStr = targetStr.replace(regexp, '&' + externalCharacterNameDict[characterAryItem]);
			}
		} else if (typeOf(characterAry, 'string') === true) {
			if (characterNameDict[characterAry] !== undefined) {
				regexp = new RegExp(characterAry, 'g');
				targetStr = targetStr.replace(regexp, '&' + characterNameDict[characterAry]);
			}
			if (externalCharacterNameDict[characterAry] !== undefined) {
				regexp = new RegExp(characterAry, 'g');
				targetStr = targetStr.replace(regexp, '&' + externalCharacterNameDict[characterAry]);
			}
		} else {
			/*do nothing*/
		}
		return targetStr;
	};
}
