/* ═══════════════════════════════════════════════════════
   oblige! — i18n translations
   Languages: ja (Japanese), en (English), zh (Simplified Chinese)
   ═══════════════════════════════════════════════════════ */

export const translations = {
  /* ───────────────────── JAPANESE ───────────────────── */
  ja: {
    // Navigation
    nav: {
      business: "Business",
      about: "About",
      column: "Column",
      company: "Company",
      contact: "Contact",
    },

    // Hero (TopPage)
    hero: {
      title: "NIGHT TIME PRODUCTION",
      sub: "NIGHT TIME ECONOMY. TOTAL PRODUCTION.",
      headlineLine1: "夜を、ちゃんと",
      headlineLine2: "ねらえ。",
      headlineAccent: "。",
      precisionEn: "Precision",
      precisionTail: "creates value.",
      description: "obligeは、ナイトタイムエコノミーの企画・演出・運営を、上品に、でも少しおもしろく設計します。\n立地・客層・導線・収益構造まで見立てて、ちゃんと刺さる夜をつくります。",
      cards: [
        { label: "物件取得", desc: "立地・条件・法規を\n事業目線で整理" },
        { label: "空間設計", desc: "内装・照明・動線を\nブランドから設計" },
        { label: "開業準備", desc: "施工・許認可・導入を\nまとめて推進" },
        { label: "集客運用", desc: "SNS・広告・AI活用で\n開業後も伴走" },
      ],
      ctaPrimary: "VIEW BUSINESS",
      ctaSecondary: "GET IN TOUCH",
      bubble: "そこじゃない。\nもっと、奥だ。",
      bubbleAccent: "奥",
      missNote: "そこかな?",
      hitNote: "ここね。",
      proofEyebrow: "Hit the Mark",
      proofTitle: "矢は一本。見立ては濃いめ。",
      stats: [
        { num: "探す", suffix: "", label: "Find", subLabel: "まず、的そのものを疑う" },
        { num: "狙う", suffix: "", label: "Aim", subLabel: "刺さる一手に絞る" },
        { num: "当てる", suffix: "", label: "Hit", subLabel: "言いっぱなしにせず形にする" },
      ],
      tagline: "6 BUSINESSES. ONE AIM.",
      taglineSub: "まず見立ててから、夜の事業を動かす。",
      vertical: "OBLIGE INC.",
      gunze: {
        orbitTile: "OBLIGE · NIGHT TIME PRODUCTION · 夜を、狙え · ",
        headlinePre: "夜を、",
        headlineAccent: "狙え",
        headlinePost: "。",
      },
    },

    // Philosophy
    philosophy: {
      sectionEn: "Philosophy",
      sectionJa: "哲学",
      target: {
        label: "的を射る",
        sub: "Precision",
        desc: "矢を放つ前に、\n的そのものを見立てる。",
        detail: "夜の事業の本当の的は、競合の真似でも流行でもない。立地の癖、客層の動き、法規の隙間、収益の構造。そこまで見立てて、ようやく最初の一矢を放つ。",
      },
      surprise: {
        label: "狙いを変える",
        sub: "Reframe",
        desc: "見立てを変え、\n新しい狙いをつくる",
        detail: "最初に見えている正解だけが、正解とは限らない。空間設計、ブランディング、マーケティングまで一貫して見直すことで、夜の事業にまだない狙いをつくる。",
      },
      loop: {
        label: "義務を果たす",
        sub: "Commitment",
        desc: "最後まで責任を持ち、\n信頼に応え続ける",
        detail: "obligeの語源は「義務を負う」。プロジェクトの完了は、私たちにとってゴールではなくスタートです。オープン後のフォローアップ、運営改善の提案、SNS運用のサポートまで、責任を持って伴走し続けます。その姿勢が、次のご依頼につながっています。",
      },
      tagline: "的を、決める。夜を、動かす。",
      taglineSub: "obligeとは「義務を負う」「恩義を施す」「喜ぶことをする」。\nナイトタイムエコノミーに特化した総合プロデュース。",
    },

    // Business section
    business: {
      sectionEn: "Business",
      sectionJa: "事業内容",
    },

    // Division names & taglines & content
    divisions: {
      construction: {
        nameJa: "建設事業",
        tagline: "狙った夜は、ミリで決まる。",
        description: "営業時間が始まる瞬間から逆算する建築・施工。許認可対応から工程管理まで、狙った品質をミリ単位で実装します。",
        strengths: [
          { title: "許認可対応", desc: "深夜営業に必要な建設業許可・各種届出をワンストップで対応" },
          { title: "工程管理", desc: "営業スケジュールに合わせた柔軟な施工計画を策定" },
          { title: "法規対応", desc: "風営法・消防法など、ナイトシーン特有の法規制に精通" },
          { title: "品質管理", desc: "代表が現場に常駐し、図面通りの品質を担保" },
        ],
        process: [
          { step: "01", title: "ご相談・ヒアリング", desc: "事業計画や予算感をお伺いし、最適なプランをご提案" },
          { step: "02", title: "現地調査・設計", desc: "現地の状況を確認し、法規制を踏まえた設計を実施" },
          { step: "03", title: "見積・ご契約", desc: "詳細な見積書をご提示し、内容にご納得いただいた上でご契約" },
          { step: "04", title: "着工・施工管理", desc: "代表が現場に常駐し、品質と工程を徹底管理" },
          { step: "05", title: "完成・引渡し", desc: "検査完了後にお引渡し。アフターフォローも万全" },
        ],
        faq: [
          { q: "工期はどのくらいですか?", a: "規模により異なりますが、一般的なクラブ・ラウンジで2〜4ヶ月程度です。" },
          { q: "深夜帯の工事は可能ですか?", a: "近隣への配慮を行いながら、深夜帯の施工にも対応しております。" },
          { q: "建設業許可は取得していますか?", a: "はい、建設業許可を取得しております。" },
        ],
      },
      "real-estate": {
        nameJa: "不動産事業",
        tagline: "当たる物件は、見つけ方が違う。",
        description: "入る人の動線から、物件を選ぶ。立地・条件・法規・収益性を見立て、事業の的に合う土台を探します。",
        strengths: [
          { title: "物件の目利き", desc: "ナイトタイム業態に適した立地・条件を見極める専門知識" },
          { title: "リノベーション提案", desc: "既存物件のポテンシャルを最大限に引き出すリノベ企画" },
          { title: "民泊運用", desc: "インバウンド需要を見据えた民泊物件の企画・運用サポート" },
          { title: "ワンストップ", desc: "物件探しから内装・開業まで一貫してサポート" },
        ],
        process: [
          { step: "01", title: "ヒアリング", desc: "事業内容・エリア・予算をお伺いし、条件を整理" },
          { step: "02", title: "物件リサーチ", desc: "独自ネットワークで最適な物件をリサーチ" },
          { step: "03", title: "内見・調査", desc: "候補物件の現地調査、法規チェック" },
          { step: "04", title: "契約サポート", desc: "契約条件の交渉から締結までサポート" },
          { step: "05", title: "リノベ・開業", desc: "内装設計・施工・開業準備まで一貫対応" },
        ],
        faq: [
          { q: "対応エリアはどこですか?", a: "全国対応しております。ナイトタイム業態に適した物件を全国からリサーチいたします。" },
          { q: "民泊の運用代行もしていますか?", a: "企画・リノベーションから運用サポートまで対応可能です。" },
          { q: "居抜き物件の取り扱いはありますか?", a: "はい、ナイトタイム業態の居抜き物件も多数取り扱っております。" },
        ],
      },
      "interior-design": {
        nameJa: "インテリア設計事業",
        tagline: "空間に、ブランドの的を仕込む。",
        description: "ブランドの輪郭が、空間の輪郭になる。銀座・北新地を中心に、照明・素材・動線まで一貫して設計します。",
        strengths: [
          { title: "ナイトシーン専門の設計力", desc: "照明・音響・動線を知り尽くした空間設計" },
          { title: "ブランディング起点", desc: "ターゲット分析からコンセプト策定まで戦略的に設計" },
          { title: "ワンストップ対応", desc: "設計から施工、アフターフォローまで一貫体制" },
          { title: "3Dパース提案", desc: "完成イメージを3Dビジュアルで事前に確認" },
        ],
        process: [
          { step: "01", title: "ヒアリング・現地調査", desc: "ビジョンをお伺いし、現地の環境を調査" },
          { step: "02", title: "コンセプト策定", desc: "ブランディング視点から空間コンセプトを策定" },
          { step: "03", title: "設計・3Dパース提案", desc: "図面と3Dパースで完成イメージをご提案" },
          { step: "04", title: "施工", desc: "代表が現場に常駐し品質を管理" },
          { step: "05", title: "引渡し・アフターフォロー", desc: "完成後も責任を持って対応" },
        ],
        faq: [
          { q: "対応エリアはどこですか?", a: "銀座・北新地を中心にナイトタイム業態の空間設計を承っております。" },
          { q: "設計のみの依頼は可能ですか?", a: "設計から施工まで一貫でのご依頼を推奨しておりますが、ご相談ください。" },
          { q: "予算はどのくらいですか?", a: "規模やコンセプトにより異なります。まずはお気軽にご相談ください。" },
          { q: "施工事例を見ることはできますか?", a: "はい、打ち合わせ時にこれまでの施工事例をご紹介いたします。" },
        ],
      },
      "food-beverage": {
        nameJa: "飲食事業",
        tagline: "小さな一杯から、夜の的を射る。",
        description: "キッチンカーを活用したグリーンスムージー販売を中心に、夜の過ごし方に新しい狙いをつくります。イベント出店やコラボレーションも展開しています。",
        strengths: [
          { title: "キッチンカー運営", desc: "機動力を活かした柔軟な出店・営業" },
          { title: "グリーンスムージー", desc: "健康志向のオリジナルブランドを展開" },
          { title: "イベント出店", desc: "ナイトイベント・フェスへの出店実績" },
          { title: "コラボレーション", desc: "店舗・ブランドとのコラボメニュー開発" },
        ],
        process: [
          { step: "01", title: "お問い合わせ", desc: "出店・コラボのご希望をお伺い" },
          { step: "02", title: "プランニング", desc: "メニュー・出店場所・スケジュールを策定" },
          { step: "03", title: "実施・運営", desc: "当日のオペレーションまで一貫対応" },
        ],
        faq: [
          { q: "イベント出店の依頼は可能ですか?", a: "はい、規模やエリアに応じて柔軟に対応いたします。" },
          { q: "コラボメニューの開発もできますか?", a: "ブランドコンセプトに合わせたオリジナルメニューの開発が可能です。" },
        ],
      },
      marketing: {
        nameJa: "SNS/WEB広告事業",
        tagline: "集客の的は、AIで動く。",
        description: "SNS運用・WEB広告・ウェブサイト制作、そしてAI活用による運用自動化。業界を知り尽くしたマーケターが、人とAIの両輪で集客の的を狙います。",
        strengths: [
          { title: "ナイトタイム特化SNS運用", desc: "業界特有のターゲット・時間帯を熟知した運用" },
          { title: "WEB広告運用", desc: "Google・Meta広告を活用した効率的な集客" },
          { title: "ウェブサイト制作", desc: "ブランドイメージを体現するサイト制作" },
          { title: "AI自動化・生成AI活用", desc: "LINE公式のAIチャットボット、キャスト動画のAI編集、AI画像生成、レビュー自動返信でナイトタイム運用の工数を削減" },
          { title: "データドリブン", desc: "数値分析に基づく継続的な改善提案" },
        ],
        process: [
          { step: "01", title: "ヒアリング・現状分析", desc: "現状のマーケティング施策と課題を整理" },
          { step: "02", title: "戦略策定", desc: "ターゲット・チャネル・KPIを設定" },
          { step: "03", title: "制作・運用開始", desc: "クリエイティブ制作と運用をスタート" },
          { step: "04", title: "レポート・改善", desc: "月次レポートと改善提案を継続" },
        ],
        faq: [
          { q: "SNS運用だけの依頼もできますか?", a: "はい、SNS運用のみのプランもご用意しています。" },
          { q: "どのSNSに対応していますか?", a: "Instagram・TikTok・X(Twitter)・LINE公式アカウントなど幅広く対応しています。" },
          { q: "AIを使った集客・運用支援もできますか?", a: "はい。LINE公式のAIチャットボット構築、キャスト動画のAI編集、AI画像生成、Google・食べログのレビュー自動返信など、ナイトタイム特化のAI運用パッケージをご用意しています。" },
          { q: "最低契約期間はありますか?", a: "効果検証のため、3ヶ月以上のご契約を推奨しております。" },
        ],
      },
      branding: {
        nameJa: "ブランディング戦略",
        tagline: "的を決める仕事から、始める。",
        description: "ブランドの的を見立てるところから、事業は始まる。コンセプト策定・CI/VI設計・ポジショニング戦略まで、ブランドの根幹を設計します。",
        strengths: [
          { title: "ブランドコンセプト策定", desc: "ターゲット・競合分析から唯一無二のコンセプトを導出" },
          { title: "CI/VI設計", desc: "ロゴ・カラー・タイポグラフィなどビジュアルアイデンティティを構築" },
          { title: "ポジショニング戦略", desc: "市場における最適なポジションを設計" },
          { title: "トータルプロデュース", desc: "空間・販促・デジタルまで一貫したブランド体験を設計" },
        ],
        process: [
          { step: "01", title: "ヒアリング・市場調査", desc: "事業ビジョンと市場環境を徹底的にリサーチ" },
          { step: "02", title: "コンセプト策定", desc: "ブランドの核となるコンセプトを策定" },
          { step: "03", title: "CI/VI設計", desc: "ビジュアルアイデンティティをデザイン" },
          { step: "04", title: "ブランドガイドライン策定", desc: "運用ルールを体系化したガイドラインを納品" },
          { step: "05", title: "実装サポート", desc: "空間・WEB・販促物への展開をサポート" },
        ],
        faq: [
          { q: "ブランディングだけの依頼は可能ですか?", a: "はい、ブランディング戦略のみのご依頼も承っております。" },
          { q: "既存ブランドのリブランディングもできますか?", a: "はい、現状分析から新たなブランド戦略の策定まで対応可能です。" },
          { q: "費用の目安はどのくらいですか?", a: "規模や内容により異なります。まずはお気軽にご相談ください。" },
        ],
      },
    },

    // Strength section
    strength: {
      sectionEn: "Strength",
      sectionJa: "選ばれる理由",
      items: [
        {
          num: "01",
          title: "一本の矢で、6方向に当てる",
          desc: "建設・不動産・内装設計・飲食・マーケティング・ブランディングの6事業が連携。企画段階から運営まで一貫して見立てます。",
        },
        {
          num: "02",
          title: "夜の癖を、深く見立てる",
          desc: "夜の経済圏に特化した業界知識と人脈。深夜営業ならではの法規制、集客、空間設計の癖まで読み解きます。",
        },
        {
          num: "03",
          title: "ブランドの的から、設計する",
          desc: "見た目だけでなく、ブランドの狙いから空間を設計。見立てた的に向けて、唯一無二のブランド体験を組み立てます。",
        },
      ],
    },

    // Company section
    company: {
      sectionEn: "Company",
      sectionJa: "会社概要",
      rows: [
        ["会社名", "株式会社オブライジ"],
        ["英文名", "Oblige Co., Ltd."],
        ["代表者", "香山 達也"],
        ["所在地", "〒542-0081 大阪市中央区南船場4-13-12 南船場OMビル6階"],
        ["事業内容", "建設 / 不動産 / 内装設計 / 飲食 / SNS・WEB広告 / ブランディング"],
        ["対応エリア", "銀座・北新地を中心に全国対応"],
      ],
    },

    // Contact CTA
    contact: {
      heading: "Find Your Mark.",
      desc: "あなたの事業の的を、まず一緒に見立てます。\n相談・見積りは無料です。",
      email: "info@oblige.jp",
    },

    // About page
    about: {
      heroTitle: "夜の街の、見立て屋。",
      message: {
        sectionEn: "Message",
        sectionJa: "代表挨拶",
        paragraphs: [
          "ナイトタイムエコノミー——夜の経済圏は、日本において未だ大きなポテンシャルを秘めた領域です。",
          "私たちobligeは、その可能性を信じ、不動産・インテリア設計・建設・飲食・ブランディング・デジタルマーケティングの6つの事業を通じて、夜の街に確かな価値を届けることを使命としています。",
          "「oblige」とは、義務を負う、恩義を施す、喜ぶことをする。この言葉に込めた想いは、お客様への約束です。的を射る提案で期待を超え、最後まで責任を持って伴走する。その姿勢こそが、私たちの価値だと考えています。",
          "銀座・北新地を起点に、夜の街で培った経験と人脈を活かし、ワンストップで事業をプロデュース。空間づくりからブランド戦略、集客まで、すべてを一貫してサポートします。",
        ],
        ceoLabel: "CEO / Founder",
        ceoName: "香山 達也",
        ceoNameEn: "Tatsuya Kayama",
      },
      philosophy: {
        sectionEn: "Philosophy",
        tagline: "夜を、見立てる。",
        desc: "矢を放つ前に、まず夜の癖を読む。\n人の流れ、空間の温度、収益の形まで見立てて、ちゃんと刺さる事業へ伴走します。",
      },
      company: {
        sectionEn: "Company",
        sectionJa: "会社概要",
      },
    },

    // Column page
    column: {
      title: "コラム",
      allCategory: "すべて",
      emptyMessage: "このカテゴリーの記事はまだありません。",
      readTime: "読了",
      backToList: "← コラム一覧に戻る",
      backToColumn: "Back to Column",
      notFound: "記事が見つかりません",
      related: "Related Articles",
    },

    // Contact page
    contactPage: {
      eyebrow: "Contact",
      heading: "Find Your Mark.",
      desc: "あなたの事業の的を、まず一緒に見立てます。\n相談・見積りは無料です。",
      labels: {
        company: "Company",
        name: "Name",
        email: "Email",
        phone: "Phone",
        category: "Category",
        message: "Message",
        spam: "スパム防止",
        required: "*",
      },
      placeholders: {
        company: "会社名(任意)",
        name: "お名前",
        email: "メールアドレス",
        phone: "電話番号(任意)",
        selectCategory: "お問い合わせ内容を選択",
        message: "お問い合わせ内容を入力してください",
        answer: "答え",
      },
      categories: [
        "建設事業について",
        "不動産事業について",
        "内装インテリア設計について",
        "飲食事業について",
        "SNS/WEB広告について",
        "ブランディングについて",
        "その他",
      ],
      errors: {
        tooFast: "送信が早すぎます。もう一度お試しください。",
        hasUrl: "URLを含むメッセージは送信できません。",
        wrongAnswer: "計算の答えが正しくありません。",
      },
      send: "Send",
      success: {
        heading: "Thank you",
        body: "お問い合わせいただきありがとうございます。\n内容を確認の上、2営業日以内にご連絡いたします。",
      },
      directLabels: {
        email: "Email",
        instagram: "Instagram",
        address: "Address",
      },
      addressFull: "〒542-0081\n大阪市中央区南船場4-13-12\n南船場OMビル6階",
    },

    // Privacy policy
    privacy: {
      eyebrow: "Policy",
      heading: "Privacy Policy",
      subtitle: "個人情報保護方針",
      intro: "株式会社oblige(以下「当社」)は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定め、個人情報の適切な管理・保護に努めてまいります。",
      contactTitle: "お問い合わせ窓口",
      contactBody: "株式会社oblige\n〒542-0081 大阪市中央区南船場4-13-12 南船場OMビル6階\nE-mail: info@oblige.jp",
      policies: [
        {
          title: "個人情報の収集について",
          body: "当社は、お客様の個人情報を収集する場合、利用目的を明示し、適法かつ公正な手段によって収集いたします。収集する個人情報の範囲は、利用目的を達成するために必要な範囲に限定いたします。",
        },
        {
          title: "個人情報の利用目的",
          body: "当社は、お客様からお預かりした個人情報を、以下の目的で利用いたします。\n\n・お問い合わせへの回答およびご連絡\n・サービスの提供・改善・開発\n・各種ご案内やお知らせの送付\n・契約の履行および管理\n・その他、上記利用目的に付随する業務",
        },
        {
          title: "個人情報の第三者提供",
          body: "当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。\n\n・お客様の同意がある場合\n・法令に基づく場合\n・人の生命、身体または財産の保護のために必要がある場合\n・業務委託先に対して、利用目的の達成に必要な範囲で提供する場合",
        },
        {
          title: "個人情報の安全管理",
          body: "当社は、お客様の個人情報の漏洩、紛失、破壊、改ざんおよび不正なアクセスを防止するため、必要かつ適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。",
        },
        {
          title: "個人情報の開示・訂正・削除",
          body: "お客様ご自身の個人情報について、開示・訂正・追加・削除・利用停止等のご要望がある場合は、所定の手続きに基づき、速やかに対応いたします。下記のお問い合わせ窓口までご連絡ください。",
        },
        {
          title: "Cookieの使用について",
          body: "当社のウェブサイトでは、お客様の利便性向上およびアクセス解析のためにCookieを使用しています。Cookieによって個人を特定できる情報は取得しておりません。ブラウザの設定によりCookieの受け取りを拒否することも可能ですが、一部サービスが正常に機能しない場合があります。",
        },
        {
          title: "SSL暗号化通信について",
          body: "当社のウェブサイトでは、お客様の個人情報を保護するため、SSL(Secure Sockets Layer)暗号化通信を採用しています。入力された情報は暗号化されて送信されるため、第三者に情報が傍受される心配はありません。",
        },
        {
          title: "プライバシーポリシーの改定",
          body: "当社は、法令の変更や事業内容の変更等に伴い、本プライバシーポリシーを改定することがあります。改定した場合は、当ウェブサイトにて公表いたします。",
        },
      ],
    },

    // Partnership (food-beverage division)
    partnership: {
      eyebrow: "● New Partnership",
      comingBadge: "Coming Summer 2026",
      comingSub: "— 今夏リリース予定",
      category: "Partnership · Green Smoothie",
      scope: "F&B Partnership",
      titleEn: "TAIHO SEIKA",
      titleSubJa: "大宝青果 × oblige",
      location: "Osaka · Coming Summer 2026",
      tagline: "夜の街に、健やかな一杯を。",
      description: "大阪の老舗青果店「大宝青果」のフレッシュなグリーンスムージーを、obligeのキッチンカーで2026年夏より展開予定。青果のプロが厳選した素材と、ナイトタイムシーンへの新しい食体験を掛け合わせ、夜の街に健やかな一杯をお届けします。",
      dataLabels: {
        location: "Location",
        type: "Type",
        release: "Release",
        scope: "Scope",
      },
      dataValues: {
        location: "大阪 / Osaka",
        type: "Green Smoothie",
        release: "Summer 2026",
      },
      brandIdentity: "/ Brand Identity",
      logoNote: "Logo · 大宝青果",
    },

    // Division page
    division: {
      anchorNav: {
        overview: "Overview",
        strengths: "Strengths",
        flow: "Flow",
        faq: "FAQ",
      },
      sections: {
        overview: { en: "Overview", ja: "事業概要" },
        strengths: { en: "Strengths", ja: "私たちの強み" },
        flow: { en: "Flow", ja: "プロジェクトの流れ" },
        faq: { en: "FAQ", ja: "よくあるご質問" },
        related: { en: "Related", ja: "関連事業" },
      },
      cta: {
        heading: (nameJa) => `${nameJa}についてのご相談`,
        desc: "事業の的を、まず一緒に見立てます。相談・見積りは無料です。",
        contactBtn: "Contact",
        allBusinessBtn: "All Business",
      },
    },

    // Footer
    footer: {
      tagline: "ナイトタイムエコノミーの\nトータルプロデュース",
      copyright: `\u00A9 ${new Date().getFullYear()} Oblige Co., Ltd.`,
      address: "〒542-0081 大阪市中央区南船場4-13-12 南船場OMビル6階",
      addressShort: "大阪市中央区南船場4-13-12",
      contactLabel: "Contact",
      businessLabel: "Business",
    },
  },

  /* ───────────────────── ENGLISH ───────────────────── */
  en: {
    nav: {
      business: "Business",
      about: "About",
      column: "Column",
      company: "Company",
      contact: "Contact",
    },

    hero: {
      title: "NIGHT TIME PRODUCTION",
      sub: "NIGHT TIME ECONOMY. TOTAL PRODUCTION.",
      headlineLine1: "Aim at the night,",
      headlineLine2: "properly.",
      headlineAccent: ".",
      precisionEn: "Precision",
      precisionTail: "creates value.",
      description: "Oblige designs planning, staging, and operations for the nighttime economy with polish and a little wit. We read the location, audience flow, and revenue structure before creating a night that lands properly.",
      cards: [
        { label: "Property", desc: "Location, terms, and\nlegal fit reviewed" },
        { label: "Space Design", desc: "Interior, lighting, and\nflow from the brand" },
        { label: "Opening Prep", desc: "Build, permits, and\nsetup moved together" },
        { label: "Growth Ops", desc: "SNS, ads, and AI\nsupport after launch" },
      ],
      ctaPrimary: "VIEW BUSINESS",
      ctaSecondary: "GET IN TOUCH",
      bubble: "Not there.\nGo deeper.",
      bubbleAccent: "deeper",
      missNote: "Maybe there?",
      hitNote: "Right here.",
      proofEyebrow: "Hit the Mark",
      proofTitle: "One arrow. A pleasantly excessive amount of thinking.",
      stats: [
        { num: "Find", suffix: "", label: "Mark", subLabel: "Question where the target really is" },
        { num: "Aim", suffix: "", label: "Focus", subLabel: "Narrow the move that will land" },
        { num: "Hit", suffix: "", label: "Build", subLabel: "Turn the proposal into reality" },
      ],
      tagline: "6 BUSINESSES. ONE AIM.",
      taglineSub: "We read the mark properly before moving the night business.",
      vertical: "OBLIGE INC.",
      gunze: {
        orbitTile: "OBLIGE · NIGHT TIME PRODUCTION · AIM THE NIGHT · ",
        headlinePre: "Aim the ",
        headlineAccent: "night",
        headlinePost: ".",
      },
    },

    philosophy: {
      sectionEn: "Philosophy",
      sectionJa: "Philosophy",
      target: {
        label: "Hit the Mark",
        sub: "Precision",
        desc: "Before the arrow flies,\nwe define the target itself.",
        detail: "The true target of a nighttime business is not a trend or a copy of a competitor. It lives in the quirks of the location, the movement of guests, the gaps in regulation, and the revenue structure. Only after reading that far do we release the first arrow.",
      },
      surprise: {
        label: "Reframe the Aim",
        sub: "Reframe",
        desc: "Change the reading,\ncreate a new aim",
        detail: "The first visible answer is not always the right one. By reviewing space design, branding, and marketing as one system, we create a new aim for the nighttime business.",
      },
      loop: {
        label: "Fulfill Our Duty",
        sub: "Commitment",
        desc: "Take responsibility to the end,\ncontinuing to earn trust",
        detail: "The origin of 'oblige' is 'to be obligated.' Project completion is not the goal for us -- it's the starting point. From post-opening follow-up to operational improvement proposals and SNS management support, we continue to walk alongside our clients with responsibility. This commitment leads to the next engagement.",
      },
      tagline: "Define the mark. Move the night.",
      taglineSub: "'Oblige' means to be obligated, to do a favor, to please.\nTotal production specialized in the nighttime economy.",
    },

    business: {
      sectionEn: "Business",
      sectionJa: "Our Business",
    },

    divisions: {
      construction: {
        nameJa: "Construction",
        tagline: "The aimed night is decided by millimeters.",
        description: "Construction planned backward from the moment business begins. From permits to project management, we build the intended quality down to the millimeter.",
        strengths: [
          { title: "Permits & Licensing", desc: "One-stop handling of construction licenses and filings required for late-night operations" },
          { title: "Project Management", desc: "Flexible construction schedules aligned with your business timeline" },
          { title: "Legal Compliance", desc: "Deep expertise in entertainment business laws, fire codes, and other nighttime regulations" },
          { title: "Quality Control", desc: "Our CEO is on site to guarantee the build matches the drawings" },
        ],
        process: [
          { step: "01", title: "Consultation", desc: "We listen to your business plan and budget and propose the optimal approach" },
          { step: "02", title: "Site Survey & Design", desc: "We inspect the site and produce a design that accounts for all regulations" },
          { step: "03", title: "Quote & Contract", desc: "Detailed estimate provided; we sign only after you're fully comfortable with the scope" },
          { step: "04", title: "Construction", desc: "Our CEO supervises on-site, managing quality and schedule end-to-end" },
          { step: "05", title: "Completion & Handover", desc: "Delivery after inspection, with full aftercare support" },
        ],
        faq: [
          { q: "How long does construction take?", a: "It varies by scale, but typical clubs and lounges take 2–4 months." },
          { q: "Can you work during late-night hours?", a: "Yes, we accommodate late-night construction while respecting the surrounding neighborhood." },
          { q: "Do you hold a construction license?", a: "Yes, we hold a valid construction business license." },
        ],
      },
      "real-estate": {
        nameJa: "Real Estate",
        tagline: "Properties that land are found differently.",
        description: "We choose properties from the movement of the people who will enter them. Location, terms, regulations, and revenue are read together to find the ground that fits the business target.",
        strengths: [
          { title: "Property Expertise", desc: "Specialized knowledge to identify the right location and terms for nighttime businesses" },
          { title: "Renovation Planning", desc: "Proposals that unlock the full potential of existing properties" },
          { title: "Vacation Rental Ops", desc: "Planning and operations support tailored to inbound-tourism demand" },
          { title: "One-Stop Support", desc: "End-to-end support from finding a property through interior build-out to opening" },
        ],
        process: [
          { step: "01", title: "Consultation", desc: "We review your concept, target area, and budget to define the search criteria" },
          { step: "02", title: "Property Search", desc: "We source the best-fit properties through our proprietary network" },
          { step: "03", title: "Viewing & Due Diligence", desc: "On-site inspection of candidates and regulatory checks" },
          { step: "04", title: "Contract Support", desc: "Support from term negotiation through signing" },
          { step: "05", title: "Renovation & Opening", desc: "Integrated handling of interior design, construction, and opening prep" },
        ],
        faq: [
          { q: "Which areas do you cover?", a: "We cover properties nationwide, sourcing the best locations for nighttime businesses from across Japan." },
          { q: "Do you manage vacation rentals?", a: "Yes — from planning and renovation through operational support." },
          { q: "Do you handle second-generation properties?", a: "Yes, we have a strong inventory of nighttime-business turnkey properties." },
        ],
      },
      "interior-design": {
        nameJa: "Interior Design",
        tagline: "Build the brand's mark into the space.",
        description: "The outline of the brand becomes the outline of the space. Centered on Ginza and Kitashinchi, we design lighting, materials, and flow as one integrated project.",
        strengths: [
          { title: "Night-Scene Specialist", desc: "Spatial design informed by mastery of lighting, acoustics, and flow" },
          { title: "Brand-First Approach", desc: "Strategic design from target analysis through concept definition" },
          { title: "One-Stop Delivery", desc: "Design, construction, and aftercare under one team" },
          { title: "3D Visualization", desc: "Confirm the finished look in advance with 3D renderings" },
        ],
        process: [
          { step: "01", title: "Discovery & Survey", desc: "We capture your vision and survey the site's environment" },
          { step: "02", title: "Concept", desc: "Space concept defined from a branding perspective" },
          { step: "03", title: "Design & 3D", desc: "Drawings and 3D renderings communicate the finished look" },
          { step: "04", title: "Construction", desc: "Our CEO supervises on-site to manage quality" },
          { step: "05", title: "Handover & Aftercare", desc: "Full responsibility continues after opening" },
        ],
        faq: [
          { q: "Which areas do you cover?", a: "We focus on Ginza and Kitashinchi for nighttime-business interior design." },
          { q: "Can you do design only?", a: "We recommend integrated design + construction, but please reach out to discuss." },
          { q: "What's the typical budget?", a: "It varies widely by scale and concept — please get in touch first." },
          { q: "Can I see past work?", a: "Yes, we walk you through relevant past projects during the first meeting." },
        ],
      },
      "food-beverage": {
        nameJa: "Food & Beverage",
        tagline: "A small glass can hit the night.",
        description: "Centered on a food-truck green-smoothie business, we create a new aim for how people spend the night. We also operate at events and develop brand collaborations.",
        strengths: [
          { title: "Food Truck Operations", desc: "Flexible deployments that take advantage of mobile infrastructure" },
          { title: "Green Smoothies", desc: "A health-conscious original brand line" },
          { title: "Event Presence", desc: "Track record of deployments at night events and festivals" },
          { title: "Collaborations", desc: "Co-developed menus with venues and brands" },
        ],
        process: [
          { step: "01", title: "Inquiry", desc: "We learn your event or collaboration goals" },
          { step: "02", title: "Planning", desc: "Menu, location, and schedule defined together" },
          { step: "03", title: "Execution", desc: "End-to-end coverage including day-of operations" },
        ],
        faq: [
          { q: "Can you deploy at events?", a: "Yes, we flex to the scale and region of each event." },
          { q: "Can you co-develop menus?", a: "Yes — original menus aligned with your brand concept." },
        ],
      },
      marketing: {
        nameJa: "Digital Marketing",
        tagline: "The target of acquisition moves with AI.",
        description: "Social media management, web advertising, website production, and AI-powered automation. Marketers who know the industry aim at acquisition through both human insight and AI capability.",
        strengths: [
          { title: "Night-Focused Social", desc: "Operations tuned to the specific targets and time windows of the industry" },
          { title: "Web Advertising", desc: "Efficient acquisition via Google and Meta ads" },
          { title: "Website Production", desc: "Websites that embody your brand identity" },
          { title: "AI Automation & Generative AI", desc: "LINE chatbots, AI video editing for cast reels, AI image generation, and automated review replies that cut nighttime ops workload" },
          { title: "Data-Driven", desc: "Continuous improvement grounded in performance data" },
        ],
        process: [
          { step: "01", title: "Audit", desc: "We review current marketing activities and pain points" },
          { step: "02", title: "Strategy", desc: "Targets, channels, and KPIs defined" },
          { step: "03", title: "Launch", desc: "Creative production and campaign launch" },
          { step: "04", title: "Report & Improve", desc: "Monthly reporting and improvement proposals" },
        ],
        faq: [
          { q: "Can you handle social-media only?", a: "Yes — we offer social-only engagement plans." },
          { q: "Which platforms do you cover?", a: "Instagram, TikTok, X (Twitter), LINE Official Account and more." },
          { q: "Do you support AI-powered acquisition and operations?", a: "Yes. We offer nightlife-specific AI packages — LINE chatbot setup, AI video editing for cast reels, AI image generation, and automated review replies for Google and Tabelog." },
          { q: "Is there a minimum contract period?", a: "We recommend 3 months or more to properly validate results." },
        ],
      },
      branding: {
        nameJa: "Branding Strategy",
        tagline: "Start by deciding the mark.",
        description: "A business begins by reading the brand's true target. We design the core of the brand through concept, CI/VI, and positioning strategy.",
        strengths: [
          { title: "Brand Concepting", desc: "One-of-a-kind concepts drawn from target and competitive analysis" },
          { title: "CI/VI Design", desc: "Logo, color, typography, and other visual-identity elements" },
          { title: "Positioning", desc: "Designing the optimal position within the market" },
          { title: "Total Production", desc: "Unified brand experience across space, promotion, and digital" },
        ],
        process: [
          { step: "01", title: "Research", desc: "Deep research into your business vision and market environment" },
          { step: "02", title: "Concept", desc: "Core brand concept defined" },
          { step: "03", title: "CI/VI", desc: "Visual identity designed" },
          { step: "04", title: "Guidelines", desc: "Operational guidelines delivered for consistent use" },
          { step: "05", title: "Rollout", desc: "Support applying the brand across space, web, and promotion" },
        ],
        faq: [
          { q: "Can you do branding only?", a: "Yes — branding-only engagements are welcome." },
          { q: "Do you handle rebranding?", a: "Yes, from current-state analysis through new-strategy definition." },
          { q: "What's the rough budget?", a: "It varies by scale and scope — please get in touch to discuss." },
        ],
      },
    },

    strength: {
      sectionEn: "Strength",
      sectionJa: "Why Choose Us",
      items: [
        {
          num: "01",
          title: "One arrow. Six directions.",
          desc: "Six integrated divisions -- construction, real estate, interior design, food & beverage, marketing, and branding -- read and produce your venture from concept to operation.",
        },
        {
          num: "02",
          title: "Reading the habits of the night",
          desc: "Deep industry knowledge and networks focused on the nighttime economy. We read the quirks of late-night regulations, acquisition, and spatial design.",
        },
        {
          num: "03",
          title: "Design from the brand's mark",
          desc: "We design spaces from the aim of the brand, not just appearances. Every brand experience is built toward the mark we define.",
        },
      ],
    },

    company: {
      sectionEn: "Company",
      sectionJa: "Company Info",
      rows: [
        ["Company Name", "Oblige Co., Ltd."],
        ["Japanese Name", "株式会社オブライジ"],
        ["CEO", "Tatsuya Kayama"],
        ["Address", "Minamisenba OM Bldg. 6F, 4-13-12 Minamisenba, Chuo-ku, Osaka 542-0081"],
        ["Services", "Construction / Real Estate / Interior Design / F&B / Digital Marketing / Branding"],
        ["Service Area", "Nationwide, centered on Ginza and Kitashinchi"],
      ],
    },

    contact: {
      heading: "Find Your Mark.",
      desc: "We start by reading the target of your business together.\nConsultations and estimates are free.",
      email: "info@oblige.jp",
    },

    about: {
      heroTitle: "Reading the night, properly.",
      message: {
        sectionEn: "Message",
        sectionJa: "CEO Message",
        paragraphs: [
          "The nighttime economy holds enormous untapped potential in Japan.",
          "At oblige, we believe in that potential. Through our six divisions — real estate, interior design, construction, F&B, branding, and digital marketing — our mission is to deliver real value to the night.",
          "The word 'oblige' means to be obligated, to do a favor, to please. That meaning is our promise to our clients. Exceeding expectations with precision proposals, and walking alongside them with full responsibility to the end — that commitment is what we stand for.",
          "Based in Ginza and Kitashinchi, we leverage our experience and networks in the nighttime scene to produce businesses end-to-end — from space design through brand strategy to customer acquisition.",
        ],
        ceoLabel: "CEO / Founder",
        ceoName: "Tatsuya Kayama",
        ceoNameEn: "香山 達也",
      },
      philosophy: {
        sectionEn: "Philosophy",
        tagline: "Read the night.",
        desc: "Before releasing the arrow, we read the habits of the night.\nFlow, atmosphere, and revenue structure are all part of the mark. Then we accompany the business until it lands properly.",
      },
      company: {
        sectionEn: "Company",
        sectionJa: "Company Info",
      },
    },

    column: {
      title: "Column",
      allCategory: "All",
      emptyMessage: "No articles in this category yet.",
      readTime: "Read",
      backToList: "← Back to Column",
      backToColumn: "Back to Column",
      notFound: "Article not found",
      related: "Related Articles",
    },

    contactPage: {
      eyebrow: "Contact",
      heading: "Find Your Mark.",
      desc: "We start by reading the target of your business together.\nConsultations and estimates are free.",
      labels: {
        company: "Company",
        name: "Name",
        email: "Email",
        phone: "Phone",
        category: "Category",
        message: "Message",
        spam: "Anti-spam",
        required: "*",
      },
      placeholders: {
        company: "Company name (optional)",
        name: "Your name",
        email: "Email address",
        phone: "Phone number (optional)",
        selectCategory: "Select an inquiry category",
        message: "Tell us about your project",
        answer: "Answer",
      },
      categories: [
        "Construction",
        "Real Estate",
        "Interior Design",
        "Food & Beverage",
        "Digital Marketing",
        "Branding",
        "Other",
      ],
      errors: {
        tooFast: "Submission too fast. Please try again.",
        hasUrl: "Messages containing URLs cannot be sent.",
        wrongAnswer: "Incorrect answer to the math question.",
      },
      send: "Send",
      success: {
        heading: "Thank you",
        body: "Thank you for your inquiry.\nWe will review your message and get back to you within 2 business days.",
      },
      directLabels: {
        email: "Email",
        instagram: "Instagram",
        address: "Address",
      },
      addressFull: "Minamisenba OM Bldg. 6F\n4-13-12 Minamisenba, Chuo-ku\nOsaka 542-0081, Japan",
    },

    privacy: {
      eyebrow: "Policy",
      heading: "Privacy Policy",
      subtitle: "Personal Information Protection",
      intro: "Oblige Co., Ltd. (hereinafter 'the Company') recognizes the protection of our customers' personal information as a critical responsibility, and establishes this Privacy Policy to ensure proper management and protection of personal information.",
      contactTitle: "Contact for Inquiries",
      contactBody: "Oblige Co., Ltd.\nMinamisenba OM Bldg. 6F, 4-13-12 Minamisenba, Chuo-ku, Osaka 542-0081\nE-mail: info@oblige.jp",
      policies: [
        {
          title: "Collection of Personal Information",
          body: "When collecting personal information, the Company clearly states the purpose of use and collects information through lawful and fair means. The scope of personal information collected is limited to what is necessary to achieve the stated purpose.",
        },
        {
          title: "Purpose of Use",
          body: "The Company uses personal information entrusted by customers for the following purposes:\n\n・Responding to inquiries and communications\n・Providing, improving, and developing services\n・Sending various notifications and announcements\n・Performance and management of contracts\n・Other operations incidental to the above purposes",
        },
        {
          title: "Provision to Third Parties",
          body: "The Company does not provide personal information to third parties except in the following cases:\n\n・With the customer's consent\n・As required by law\n・When necessary to protect life, body, or property\n・When providing to business partners within the scope necessary to achieve the purpose of use",
        },
        {
          title: "Security Management",
          body: "The Company implements necessary and appropriate security measures to prevent leakage, loss, destruction, falsification, and unauthorized access to customers' personal information, and strives for the safe management of personal information.",
        },
        {
          title: "Disclosure, Correction, and Deletion",
          body: "If customers request disclosure, correction, addition, deletion, or suspension of use of their own personal information, we will respond promptly based on the prescribed procedures. Please contact the inquiry desk below.",
        },
        {
          title: "Use of Cookies",
          body: "This website uses cookies to improve user convenience and for access analysis. Cookies do not collect personally identifiable information. You can refuse to accept cookies through your browser settings, but some services may not function correctly.",
        },
        {
          title: "SSL Encrypted Communication",
          body: "This website uses SSL (Secure Sockets Layer) encryption to protect customers' personal information. Information entered is transmitted in encrypted form, so there is no concern about interception by third parties.",
        },
        {
          title: "Revision of Privacy Policy",
          body: "The Company may revise this Privacy Policy in accordance with changes in laws or business content. Any revisions will be announced on this website.",
        },
      ],
    },

    partnership: {
      eyebrow: "● New Partnership",
      comingBadge: "Coming Summer 2026",
      comingSub: "— Launching this summer",
      category: "Partnership · Green Smoothie",
      scope: "F&B Partnership",
      titleEn: "TAIHO SEIKA",
      titleSubJa: "Taiho Seika × oblige",
      location: "Osaka · Coming Summer 2026",
      tagline: "A healthy glass for the night.",
      description: "We are launching fresh green smoothies from Osaka's long-established greengrocer Taiho Seika through oblige food trucks from summer 2026. By combining produce specialists' carefully selected ingredients with a new food experience for the nighttime scene, we deliver a healthy glass to the night.",
      dataLabels: {
        location: "Location",
        type: "Type",
        release: "Release",
        scope: "Scope",
      },
      dataValues: {
        location: "Osaka, Japan",
        type: "Green Smoothie",
        release: "Summer 2026",
      },
      brandIdentity: "/ Brand Identity",
      logoNote: "Logo · Taiho Seika",
    },

    division: {
      anchorNav: {
        overview: "Overview",
        strengths: "Strengths",
        flow: "Flow",
        faq: "FAQ",
      },
      sections: {
        overview: { en: "Overview", ja: "Overview" },
        strengths: { en: "Strengths", ja: "Our Strengths" },
        flow: { en: "Flow", ja: "Project Flow" },
        faq: { en: "FAQ", ja: "Frequently Asked Questions" },
        related: { en: "Related", ja: "Related Services" },
      },
      cta: {
        heading: (nameJa) => `Inquiries about ${nameJa}`,
        desc: "We start by reading the target of your business together. Consultations and estimates are free.",
        contactBtn: "Contact",
        allBusinessBtn: "All Business",
      },
    },

    footer: {
      tagline: "Total Production for\nthe Nighttime Economy",
      copyright: `\u00A9 ${new Date().getFullYear()} Oblige Co., Ltd.`,
      address: "Minamisenba OM Bldg. 6F, 4-13-12 Minamisenba, Chuo-ku, Osaka 542-0081",
      addressShort: "4-13-12 Minamisenba, Chuo-ku, Osaka",
      contactLabel: "Contact",
      businessLabel: "Business",
    },
  },

  /* ───────────────────── CHINESE (Simplified) ───────────────────── */
  zh: {
    nav: {
      business: "Business",
      about: "About",
      column: "Column",
      company: "Company",
      contact: "Contact",
    },

    hero: {
      title: "NIGHT TIME PRODUCTION",
      sub: "NIGHT TIME ECONOMY. TOTAL PRODUCTION.",
      headlineLine1: "认真瞄准，",
      headlineLine2: "这一个夜晚。",
      headlineAccent: "。",
      precisionEn: "Precision",
      precisionTail: "creates value.",
      description: "oblige以优雅、也带一点趣味的方式，设计夜间经济的企划、演出与运营。\n我们研判地段、客群动线与收益结构，打造真正命中的夜晚。",
      cards: [
        { label: "物件取得", desc: "以事业视角整理\n地段・条件・法规" },
        { label: "空间设计", desc: "以内装・照明・动线\n塑造品牌体验" },
        { label: "开业准备", desc: "施工・许可・导入\n统一推进" },
        { label: "集客运营", desc: "以SNS・广告・AI\n持续陪伴" },
      ],
      ctaPrimary: "VIEW BUSINESS",
      ctaSecondary: "GET IN TOUCH",
      bubble: "不是那里。\n更，深处。",
      bubbleAccent: "深",
      missNote: "是那里吗?",
      hitNote: "就是这里。",
      proofEyebrow: "Hit the Mark",
      proofTitle: "箭只有一支。思考可以多一点。",
      stats: [
        { num: "寻找", suffix: "", label: "Find", subLabel: "先判断靶心到底在哪里" },
        { num: "瞄准", suffix: "", label: "Aim", subLabel: "聚焦真正会命中的一手" },
        { num: "命中", suffix: "", label: "Hit", subLabel: "不止提案，也负责落地" },
      ],
      tagline: "6 BUSINESSES. ONE AIM.",
      taglineSub: "先认真判断，再推动夜间事业。",
      vertical: "OBLIGE INC.",
      gunze: {
        orbitTile: "OBLIGE · NIGHT TIME PRODUCTION · 瞄准夜晚 · ",
        headlinePre: "瞄准",
        headlineAccent: "夜晚",
        headlinePost: "。",
      },
    },

    philosophy: {
      sectionEn: "Philosophy",
      sectionJa: "哲学",
      target: {
        label: "精准命中",
        sub: "Precision",
        desc: "放箭之前，\n先判断靶心本身。",
        detail: "夜间事业真正的靶心，不是流行，也不是模仿竞争对手。它藏在地段的特性、客群的流动、法规的缝隙与收益结构之中。看清这些之后，才放出第一支箭。",
      },
      surprise: {
        label: "改变瞄准",
        sub: "Reframe",
        desc: "改变判断，\n创造新的目标",
        detail: "最初看见的答案，未必是真正的答案。我们将空间设计、品牌塑造与营销推广作为一个整体重新判断，为夜间事业创造新的目标。",
      },
      loop: {
        label: "履行义务",
        sub: "Commitment",
        desc: "承担责任到最后，\n持续赢得信赖",
        detail: "oblige的语源是「承担义务」。项目完成对我们而言不是终点，而是起点。从开业后的跟进到运营改善建议、SNS运营支持，我们始终以负责任的态度持续陪伴。这份态度，促成了下一次的合作。",
      },
      tagline: "确定靶心，推动夜晚。",
      taglineSub: "oblige意为「承担义务」「施予恩义」「使人欢喜」。\n专注于夜间经济的综合制作。",
    },

    business: {
      sectionEn: "Business",
      sectionJa: "事业内容",
    },

    divisions: {
      construction: {
        nameJa: "建设事业",
        tagline: "瞄准的夜晚，由毫米决定。",
        description: "从营业开始的瞬间倒推建筑与施工。从许可申报到工程管理，以毫米级精度落实目标品质。",
        strengths: [
          { title: "许可办理", desc: "一站式办理深夜营业所需的建设业许可及各类申报" },
          { title: "工程管理", desc: "根据营业时间灵活制定施工计划" },
          { title: "法规对应", desc: "熟悉风俗营业法、消防法等夜间场景特有的法规" },
          { title: "品质管理", desc: "代表常驻现场，确保图纸品质的落地" },
        ],
        process: [
          { step: "01", title: "咨询·洽谈", desc: "倾听事业计划与预算，提供最适方案" },
          { step: "02", title: "现场调查·设计", desc: "确认现场状况，结合法规进行设计" },
          { step: "03", title: "报价·签约", desc: "提供详细报价，确认后正式签约" },
          { step: "04", title: "开工·施工管理", desc: "代表常驻现场，严格管控品质与工期" },
          { step: "05", title: "竣工·交付", desc: "检查完成后交付，售后保障完善" },
        ],
        faq: [
          { q: "工期大约需要多久？", a: "依规模而定，一般俱乐部·酒廊为2〜4个月左右。" },
          { q: "可以深夜施工吗？", a: "我们会在照顾邻里的前提下，承接深夜时段的施工。" },
          { q: "是否取得建设业许可？", a: "是的，我们已取得建设业许可。" },
        ],
      },
      "real-estate": {
        nameJa: "房地产事业",
        tagline: "会命中的物件，找法不同。",
        description: "从进入者的动线开始选择物件。综合判断地段、条件、法规与收益性，寻找符合事业靶心的基础。",
        strengths: [
          { title: "物件眼光", desc: "判断夜间业态最佳地段与条件的专业知识" },
          { title: "翻新提案", desc: "最大化挖掘现有物件潜能的翻新企划" },
          { title: "民宿运营", desc: "面向入境旅游需求的民宿企划与运营支持" },
          { title: "一站式", desc: "从选址到内装、开业的一体化支持" },
        ],
        process: [
          { step: "01", title: "需求洽谈", desc: "梳理事业内容·区域·预算等条件" },
          { step: "02", title: "物件筛选", desc: "通过独家网络筛选最适物件" },
          { step: "03", title: "看房·调查", desc: "候选物件的现场调查与法规核查" },
          { step: "04", title: "合同支持", desc: "从条件谈判到签约的全程支持" },
          { step: "05", title: "翻新·开业", desc: "内装设计·施工·开业准备一体化对应" },
        ],
        faq: [
          { q: "服务区域有哪些？", a: "覆盖全日本。我们从全国范围内为您甄选最适合夜间业态的物件。" },
          { q: "也提供民宿代运营吗？", a: "从企划·翻新到运营支持均可对应。" },
          { q: "是否经手带装修物件？", a: "是的，我们经手大量夜间业态的带装修物件。" },
        ],
      },
      "interior-design": {
        nameJa: "室内设计事业",
        tagline: "把品牌的靶心，藏进空间。",
        description: "品牌的轮廓，会成为空间的轮廓。以银座·北新地为中心，一体化设计照明、素材与动线。",
        strengths: [
          { title: "夜间场景专业设计", desc: "通晓照明·音响·动线的空间设计力" },
          { title: "品牌导向", desc: "从目标分析到概念策略的战略性设计" },
          { title: "一站式对应", desc: "设计、施工、售后一体化支持" },
          { title: "3D效果图提案", desc: "通过3D视觉提前确认完成效果" },
        ],
        process: [
          { step: "01", title: "洽谈·现场调查", desc: "倾听愿景，调查现场环境" },
          { step: "02", title: "概念策略", desc: "从品牌视角制定空间概念" },
          { step: "03", title: "设计·3D效果图", desc: "以图纸与3D效果图呈现完成效果" },
          { step: "04", title: "施工", desc: "代表常驻现场管控品质" },
          { step: "05", title: "交付·售后", desc: "完成后持续负责任地对应" },
        ],
        faq: [
          { q: "服务区域有哪些？", a: "以银座·北新地为中心，承接夜间业态的空间设计。" },
          { q: "可以仅委托设计吗？", a: "我们推荐设计与施工一并委托，但欢迎咨询。" },
          { q: "预算大约多少？", a: "依规模与概念而异，欢迎随时咨询。" },
          { q: "能看施工案例吗？", a: "是的，洽谈时我们会为您介绍过往案例。" },
        ],
      },
      "food-beverage": {
        nameJa: "餐饮事业",
        tagline: "从一小杯开始，命中夜晚。",
        description: "以餐车销售的绿色蔬果昔为核心，为夜晚的度过方式创造新的目标。也开展活动出店与品牌联名。",
        strengths: [
          { title: "餐车运营", desc: "发挥机动性，灵活出店与营业" },
          { title: "绿色蔬果昔", desc: "展开面向健康需求的原创品牌" },
          { title: "活动出店", desc: "拥有夜间活动·音乐节的出店经验" },
          { title: "品牌联名", desc: "与店铺·品牌合作开发联名菜单" },
        ],
        process: [
          { step: "01", title: "咨询", desc: "倾听出店·联名需求" },
          { step: "02", title: "方案策划", desc: "确定菜单·出店地点·时间表" },
          { step: "03", title: "执行·运营", desc: "当日现场运营全程对应" },
        ],
        faq: [
          { q: "可以委托活动出店吗？", a: "可以，我们会根据规模与区域灵活应对。" },
          { q: "能开发联名菜单吗？", a: "可根据品牌概念开发独家原创菜单。" },
        ],
      },
      marketing: {
        nameJa: "数字营销事业",
        tagline: "集客的靶心，由AI推动。",
        description: "SNS运营、网络广告、网站建设，以及AI自动化运营。深谙行业的营销专家，以人的洞察与AI能力共同瞄准集客。",
        strengths: [
          { title: "夜间专项SNS运营", desc: "熟悉行业特有目标与时段的运营策略" },
          { title: "网络广告投放", desc: "活用Google·Meta广告进行高效集客" },
          { title: "网站建设", desc: "打造体现品牌形象的网站" },
          { title: "AI自动化·生成式AI活用", desc: "LINE官方AI聊天机器人、陪侍视频AI剪辑、AI图像生成、点评自动回复，有效降低夜间运营工时" },
          { title: "数据驱动", desc: "基于数据分析的持续改善提案" },
        ],
        process: [
          { step: "01", title: "洽谈·现状分析", desc: "梳理现有营销举措与课题" },
          { step: "02", title: "策略制定", desc: "设定目标·渠道·KPI" },
          { step: "03", title: "制作·运营启动", desc: "启动创意制作与运营" },
          { step: "04", title: "报告·改善", desc: "持续提供月度报告与改善建议" },
        ],
        faq: [
          { q: "只委托SNS运营可以吗？", a: "可以，我们提供仅SNS运营的方案。" },
          { q: "支持哪些SNS？", a: "涵盖Instagram·TikTok·X(Twitter)·LINE官方账号等。" },
          { q: "是否提供AI驱动的集客与运营支持？", a: "是的。我们提供夜间经济专项的AI运营套餐——LINE官方AI聊天机器人搭建、陪侍视频AI剪辑、AI图像生成、Google与Tabelog点评自动回复等。" },
          { q: "最短合同期限是多久？", a: "为便于效果验证，推荐3个月以上的合同期。" },
        ],
      },
      branding: {
        nameJa: "品牌战略",
        tagline: "从确定靶心开始。",
        description: "事业从判断品牌真正的靶心开始。从概念制定、CI/VI设计到定位战略，设计品牌的根基。",
        strengths: [
          { title: "品牌概念制定", desc: "通过目标·竞争分析导出独一无二的概念" },
          { title: "CI/VI设计", desc: "构建logo·色彩·字体等视觉识别" },
          { title: "定位战略", desc: "设计在市场中的最佳定位" },
          { title: "全案制作", desc: "设计涵盖空间·推广·数字的一致品牌体验" },
        ],
        process: [
          { step: "01", title: "洽谈·市场调研", desc: "彻底调研事业愿景与市场环境" },
          { step: "02", title: "概念制定", desc: "确立品牌核心概念" },
          { step: "03", title: "CI/VI设计", desc: "设计视觉识别" },
          { step: "04", title: "品牌指南制定", desc: "体系化交付运营规则指南" },
          { step: "05", title: "实施支持", desc: "支持在空间·网络·推广物上的落地" },
        ],
        faq: [
          { q: "只委托品牌塑造可以吗？", a: "可以，仅品牌战略的委托也承接。" },
          { q: "可以为现有品牌进行再塑造吗？", a: "可以，从现状分析到新品牌战略的制定均可对应。" },
          { q: "费用大约多少？", a: "依规模与内容而异，欢迎随时咨询。" },
        ],
      },
    },

    strength: {
      sectionEn: "Strength",
      sectionJa: "选择我们的理由",
      items: [
        {
          num: "01",
          title: "一支箭，命中六个方向",
          desc: "建设、房地产、室内设计、餐饮、营销、品牌六大事业联动。从策划到运营一体化判断与制作。",
        },
        {
          num: "02",
          title: "深读夜晚的习性",
          desc: "专注于夜间经济的行业知识与人脉网络。读懂深夜营业特有的法规、集客与空间设计的细节。",
        },
        {
          num: "03",
          title: "从品牌靶心开始设计",
          desc: "不只注重外观，而是从品牌目标开始设计空间。围绕确定的靶心，打造独一无二的品牌体验。",
        },
      ],
    },

    company: {
      sectionEn: "Company",
      sectionJa: "公司概要",
      rows: [
        ["公司名称", "株式会社Oblige"],
        ["英文名称", "Oblige Co., Ltd."],
        ["代表人", "香山 达也"],
        ["地址", "〒542-0081 大阪市中央区南船场4-13-12 南船场OM大厦6层"],
        ["事业内容", "建设 / 房地产 / 室内设计 / 餐饮 / SNS·网络广告 / 品牌战略"],
        ["服务区域", "以银座·北新地为中心，覆盖全日本"],
      ],
    },

    contact: {
      heading: "Find Your Mark.",
      desc: "我们先一起判断您事业的靶心。\n咨询与报价均为免费。",
      email: "info@oblige.jp",
    },

    about: {
      heroTitle: "认真读懂夜晚的公司。",
      message: {
        sectionEn: "Message",
        sectionJa: "代表致辞",
        paragraphs: [
          "夜间经济——夜晚的经济领域，在日本仍是一片拥有巨大潜力的蓝海。",
          "我们oblige坚信这份潜力，通过房地产、室内设计、建设、餐饮、品牌塑造、数字营销六大事业，致力于为夜之街带来实在的价值。",
          "「oblige」意为承担义务、施予恩义、使人欢喜。这份含义是我们对客户的承诺。以精准的提案超越期待，以负责任的态度陪伴到最后——这份坚持，正是我们的价值所在。",
          "以银座、北新地为据点，充分运用在夜之街积累的经验与人脉，提供一站式事业制作服务。从空间打造到品牌战略、集客推广，全程一体化支持。",
        ],
        ceoLabel: "CEO / Founder",
        ceoName: "香山 达也",
        ceoNameEn: "Tatsuya Kayama",
      },
      philosophy: {
        sectionEn: "Philosophy",
        tagline: "读懂夜晚。",
        desc: "放箭之前，先读懂夜晚的特性。\n人流、空间温度与收益结构，都是我们判断的范围。随后负责陪伴事业真正落地。",
      },
      company: {
        sectionEn: "Company",
        sectionJa: "公司概要",
      },
    },

    column: {
      title: "专栏",
      allCategory: "全部",
      emptyMessage: "该分类暂无文章。",
      readTime: "阅读",
      backToList: "← 返回专栏列表",
      backToColumn: "Back to Column",
      notFound: "未找到该文章",
      related: "Related Articles",
    },

    contactPage: {
      eyebrow: "Contact",
      heading: "Find Your Mark.",
      desc: "我们先一起判断您事业的靶心。\n咨询与报价均为免费。",
      labels: {
        company: "Company",
        name: "Name",
        email: "Email",
        phone: "Phone",
        category: "Category",
        message: "Message",
        spam: "防垃圾信息",
        required: "*",
      },
      placeholders: {
        company: "公司名称(选填)",
        name: "您的姓名",
        email: "电子邮箱",
        phone: "电话号码(选填)",
        selectCategory: "请选择咨询类型",
        message: "请输入咨询内容",
        answer: "答案",
      },
      categories: [
        "关于建设事业",
        "关于房地产事业",
        "关于室内设计",
        "关于餐饮事业",
        "关于SNS/网络广告",
        "关于品牌塑造",
        "其他",
      ],
      errors: {
        tooFast: "提交过快，请稍后再试。",
        hasUrl: "包含URL的消息无法发送。",
        wrongAnswer: "计算答案不正确。",
      },
      send: "Send",
      success: {
        heading: "Thank you",
        body: "感谢您的咨询。\n我们将在确认内容后于2个工作日内与您联系。",
      },
      directLabels: {
        email: "Email",
        instagram: "Instagram",
        address: "Address",
      },
      addressFull: "〒542-0081\n大阪市中央区南船场4-13-12\n南船场OM大厦6层",
    },

    privacy: {
      eyebrow: "Policy",
      heading: "Privacy Policy",
      subtitle: "个人信息保护方针",
      intro: "株式会社oblige(以下简称「本公司」)将保护客户个人信息视为重要职责，特制定以下隐私政策，致力于个人信息的妥善管理与保护。",
      contactTitle: "咨询窗口",
      contactBody: "株式会社oblige\n〒542-0081 大阪市中央区南船场4-13-12 南船场OM大厦6层\nE-mail: info@oblige.jp",
      policies: [
        {
          title: "关于个人信息的收集",
          body: "本公司在收集客户个人信息时，将明示使用目的，并以合法且公正的方式进行收集。所收集的个人信息范围，仅限于为达成使用目的所必需的范围。",
        },
        {
          title: "个人信息的使用目的",
          body: "本公司将客户提供的个人信息用于以下目的:\n\n・回复咨询及联络\n・服务的提供、改善与开发\n・各类通知与信息发送\n・合同的履行与管理\n・其他与上述目的相关的业务",
        },
        {
          title: "向第三方提供个人信息",
          body: "除以下情况外，本公司不会向第三方提供客户的个人信息:\n\n・已获得客户同意\n・依据法令规定\n・为保护人的生命、身体或财产所必要\n・在为达成使用目的所必需的范围内，向业务委托方提供",
        },
        {
          title: "个人信息的安全管理",
          body: "本公司为防止客户个人信息的泄漏、遗失、破坏、篡改及非法访问，将实施必要且适当的安全对策，致力于个人信息的安全管理。",
        },
        {
          title: "个人信息的公开、更正、删除",
          body: "客户如需对自己的个人信息进行公开、更正、追加、删除、停止使用等，本公司将根据规定流程迅速处理。请联系下方咨询窗口。",
        },
        {
          title: "关于Cookie的使用",
          body: "本公司网站为提升用户便利性及进行访问分析而使用Cookie。通过Cookie不会获取可识别个人的信息。您可以通过浏览器设置拒绝接收Cookie，但部分服务可能无法正常使用。",
        },
        {
          title: "SSL加密通信",
          body: "本公司网站为保护客户的个人信息，采用SSL(Secure Sockets Layer)加密通信。输入的信息以加密形式发送，不必担心被第三方截获。",
        },
        {
          title: "隐私政策的修订",
          body: "本公司可能会随法令变更或业务内容变化修订本隐私政策。修订后将在本网站上公布。",
        },
      ],
    },

    partnership: {
      eyebrow: "● New Partnership",
      comingBadge: "Coming Summer 2026",
      comingSub: "— 今夏发布",
      category: "Partnership · Green Smoothie",
      scope: "F&B Partnership",
      titleEn: "TAIHO SEIKA",
      titleSubJa: "大宝青果 × oblige",
      location: "Osaka · Coming Summer 2026",
      tagline: "为夜之街，献上健康的一杯。",
      description: "大阪老牌青果店「大宝青果」的新鲜绿色蔬果昔，预计将于2026年夏季通过oblige的餐车展开。结合青果专家精选的食材与夜间场景的全新餐饮体验，为夜之街献上健康的一杯。",
      dataLabels: {
        location: "Location",
        type: "Type",
        release: "Release",
        scope: "Scope",
      },
      dataValues: {
        location: "大阪 / Osaka",
        type: "Green Smoothie",
        release: "Summer 2026",
      },
      brandIdentity: "/ Brand Identity",
      logoNote: "Logo · 大宝青果",
    },

    division: {
      anchorNav: {
        overview: "Overview",
        strengths: "Strengths",
        flow: "Flow",
        faq: "FAQ",
      },
      sections: {
        overview: { en: "Overview", ja: "事业概要" },
        strengths: { en: "Strengths", ja: "我们的优势" },
        flow: { en: "Flow", ja: "项目流程" },
        faq: { en: "FAQ", ja: "常见问题" },
        related: { en: "Related", ja: "相关事业" },
      },
      cta: {
        heading: (nameJa) => `关于${nameJa}的咨询`,
        desc: "我们先一起判断事业的靶心。咨询与报价均为免费。",
        contactBtn: "Contact",
        allBusinessBtn: "All Business",
      },
    },

    footer: {
      tagline: "夜间经济的\n全方位制作",
      copyright: `\u00A9 ${new Date().getFullYear()} Oblige Co., Ltd.`,
      address: "〒542-0081 大阪市中央区南船场4-13-12 南船场OM大厦6层",
      addressShort: "大阪市中央区南船场4-13-12",
      contactLabel: "Contact",
      businessLabel: "Business",
    },
  },
};
