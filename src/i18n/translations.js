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
      title: "的を射る",
      sub: "Creating the Night. Defining the Scene.",
    },

    // Philosophy
    philosophy: {
      sectionEn: "Philosophy",
      sectionJa: "哲学",
      target: {
        label: "的を射る",
        sub: "Precision",
        desc: "確実にニーズを捉え、\n的確なソリューションを",
        detail: "ナイトタイムビジネスに必要なのは、表面的なトレンドではなく、本質を見抜く目。市場調査・ターゲット分析・競合リサーチを徹底し、的確なポジショニングと戦略を導き出します。6つの事業で培った知見を活かし、「なんとなく」ではない、根拠ある提案を。",
      },
      surprise: {
        label: "驚きを与える",
        sub: "Surprise",
        desc: "期待を超える提案で、\n新たな価値を創造する",
        detail: "「ここまでやるのか」——その驚きこそが、私たちの仕事の証です。空間設計からブランディング、マーケティングまで一貫してプロデュースすることで、お客様の想像を超えた体験価値を生み出します。常識にとらわれない発想で、夜の街に新しい驚きを。",
      },
      loop: {
        label: "義務を果たす",
        sub: "Commitment",
        desc: "最後まで責任を持ち、\n信頼に応え続ける",
        detail: "obligeの語源は「義務を負う」。プロジェクトの完了は、私たちにとってゴールではなくスタートです。オープン後のフォローアップ、運営改善の提案、SNS運用のサポートまで、責任を持って伴走し続けます。その姿勢が、次のご依頼につながっています。",
      },
      tagline: "的を射る提案で、夜の街に驚き!を。",
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
        tagline: "確かな技術で、夜の街を築く",
        description: "ナイトタイムシーンに特化した建築・施工。許認可対応から工程管理まで、夜の街を支える確かな技術を提供します。",
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
        tagline: "最適な物件を、最適な形で",
        description: "ナイトタイムビジネスに最適な店舗物件の紹介から、民泊・リノベーション物件の企画・運用まで。不動産の目利きでビジネスの土台を支えます。",
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
        tagline: "空間が語る、ブランドの物語",
        description: "高級クラブ・ラウンジ・バーなど、ナイトタイムシーンに特化した内装設計。銀座・北新地を中心に、ブランディングの観点から空間コンセプトを策定し、設計・素材選定・照明計画まで一貫してプロデュースします。",
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
        tagline: "夜の食を、もっと自由に",
        description: "キッチンカーを活用したグリーンスムージー販売を中心に、ナイトタイムシーンに新しい食の選択肢を提供。イベント出店やコラボレーションも展開しています。",
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
        tagline: "夜の集客を、デジタルで加速させる",
        description: "ナイトタイムビジネスに特化したSNS運用・WEB広告・ウェブサイト制作。業界を知り尽くしたマーケターが、デジタル領域からの集客を最大化します。",
        strengths: [
          { title: "ナイトタイム特化SNS運用", desc: "業界特有のターゲット・時間帯を熟知した運用" },
          { title: "WEB広告運用", desc: "Google・Meta広告を活用した効率的な集客" },
          { title: "ウェブサイト制作", desc: "ブランドイメージを体現するサイト制作" },
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
          { q: "最低契約期間はありますか?", a: "効果検証のため、3ヶ月以上のご契約を推奨しております。" },
        ],
      },
      branding: {
        nameJa: "ブランディング戦略",
        tagline: "戦略から生まれる、唯一無二のブランド",
        description: "ナイトタイムビジネスのブランドアイデンティティを構築。コンセプト策定・CI/VI設計・ポジショニング戦略まで、ブランドの根幹を設計します。",
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
          title: "ワンストップソリューション",
          desc: "建設・不動産・内装設計・飲食・マーケティング・ブランディングの6事業が連携。企画段階から運営まで一貫したプロデュースを実現。",
        },
        {
          num: "02",
          title: "ナイトタイム特化の専門性",
          desc: "ナイトタイムエコノミーに特化した業界知識と人脈。深夜営業ならではの法規制、集客、空間設計のノウハウ。",
        },
        {
          num: "03",
          title: "的を射るブランディング",
          desc: "見た目だけでなく、ブランド戦略から空間を設計。ターゲット分析・競合調査を経て、的確な提案で唯一無二のブランド体験を。",
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
      heading: "Get in touch",
      desc: "事業に関するご相談・お見積りは無料です。\nお気軽にお問い合わせください。",
      email: "info@oblige.jp",
    },

    // About page
    about: {
      heroTitle: "夜の街に、確かな価値を。",
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
        tagline: "的を射る提案で、\n夜の街に驚き!を。",
        desc: "確実にニーズを捉える「的を射る」力と、期待を超える「驚き」の提案。\nそして最後まで「義務を果たす」責任感。\nこの3つの信念で、ナイトタイムビジネスの成功を支えます。",
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
      heading: "Get in touch",
      desc: "事業に関するご相談・お見積りは無料です。\nお気軽にお問い合わせください。",
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
        desc: "お気軽にお問い合わせください。ご相談・お見積りは無料です。",
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
      title: "Hit the Mark",
      sub: "Creating the Night. Defining the Scene.",
    },

    philosophy: {
      sectionEn: "Philosophy",
      sectionJa: "Philosophy",
      target: {
        label: "Hit the Mark",
        sub: "Precision",
        desc: "Precisely capture needs,\ndeliver targeted solutions",
        detail: "What nighttime business needs is not superficial trends, but the eye to see the essence. Through thorough market research, target analysis, and competitive research, we derive precise positioning and strategies. Leveraging insights from our 6 business divisions, we deliver proposals grounded in evidence, not guesswork.",
      },
      surprise: {
        label: "Exceed Expectations",
        sub: "Surprise",
        desc: "Create new value with\nproposals that surpass expectations",
        detail: "\"They go that far?\" -- That surprise is proof of our work. By consistently producing everything from spatial design to branding and marketing, we create experiential value that exceeds our clients' imagination. With ideas unconstrained by convention, we bring new surprises to the night.",
      },
      loop: {
        label: "Fulfill Our Duty",
        sub: "Commitment",
        desc: "Take responsibility to the end,\ncontinuing to earn trust",
        detail: "The origin of 'oblige' is 'to be obligated.' Project completion is not the goal for us -- it's the starting point. From post-opening follow-up to operational improvement proposals and SNS management support, we continue to walk alongside our clients with responsibility. This commitment leads to the next engagement.",
      },
      tagline: "Precision proposals that bring surprise! to the night.",
      taglineSub: "'Oblige' means to be obligated, to do a favor, to please.\nTotal production specialized in the nighttime economy.",
    },

    business: {
      sectionEn: "Business",
      sectionJa: "Our Business",
    },

    divisions: {
      construction: {
        nameJa: "Construction",
        tagline: "Building the night with proven expertise",
        description: "Architecture and construction specialized for the nighttime scene. From permits and licensing to project management, we deliver the solid craftsmanship that supports the night economy.",
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
        tagline: "The right property, in the right form",
        description: "From sourcing store locations ideal for nighttime business, to planning and operating vacation rentals and renovation properties. Our real-estate instincts form the foundation of your venture.",
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
        tagline: "Spaces that tell your brand's story",
        description: "Interior design specialized for high-end clubs, lounges, and bars. Centered on Ginza and Kitashinchi, we start from branding to produce the full space concept — design, materials, and lighting — as one integrated project.",
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
        tagline: "Redefining nighttime dining, freely",
        description: "Centered on a food-truck green-smoothie business, we bring new food options to the nighttime scene. We also operate at events and develop brand collaborations.",
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
        tagline: "Accelerating nightlife traffic through digital",
        description: "Social media management, web advertising, and website production specialized for nighttime business. Marketers who know the industry drive customer acquisition from the digital side.",
        strengths: [
          { title: "Night-Focused Social", desc: "Operations tuned to the specific targets and time windows of the industry" },
          { title: "Web Advertising", desc: "Efficient acquisition via Google and Meta ads" },
          { title: "Website Production", desc: "Websites that embody your brand identity" },
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
          { q: "Is there a minimum contract period?", a: "We recommend 3 months or more to properly validate results." },
        ],
      },
      branding: {
        nameJa: "Branding Strategy",
        tagline: "One-of-a-kind brands born from strategy",
        description: "We build brand identities for nighttime businesses — concept, CI/VI design, and positioning strategy that form the core of the brand.",
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
          title: "One-Stop Solution",
          desc: "Six integrated divisions -- construction, real estate, interior design, food & beverage, marketing, and branding -- deliver seamless production from concept to operation.",
        },
        {
          num: "02",
          title: "Nighttime Specialization",
          desc: "Deep industry knowledge and networks focused on the nighttime economy. Expertise in late-night regulations, customer acquisition, and spatial design.",
        },
        {
          num: "03",
          title: "Precision Branding",
          desc: "We design spaces from brand strategy, not just aesthetics. Through target analysis and competitive research, we deliver proposals that create unique brand experiences.",
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
      heading: "Get in touch",
      desc: "Consultations and estimates are free.\nFeel free to reach out.",
      email: "info@oblige.jp",
    },

    about: {
      heroTitle: "Delivering real value to the night.",
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
        tagline: "Precision proposals that bring\nsurprise! to the night.",
        desc: "The precision of hitting the mark, proposals that exceed expectations,\nand the commitment to fulfill our duty.\nThese three beliefs drive the success of nighttime business.",
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
      heading: "Get in touch",
      desc: "Consultations and estimates are free.\nFeel free to reach out.",
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
        desc: "Feel free to contact us. Consultations and estimates are free.",
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
      title: "精准命中",
      sub: "Creating the Night. Defining the Scene.",
    },

    philosophy: {
      sectionEn: "Philosophy",
      sectionJa: "哲学",
      target: {
        label: "精准命中",
        sub: "Precision",
        desc: "准确把握需求，\n提供精准的解决方案",
        detail: "夜间经济所需要的，不是表面的趋势，而是洞察本质的眼光。通过深入的市场调研、目标分析和竞争研究，得出精确的定位与战略。借助六大事业的经验积累，提供有据可依的专业提案。",
      },
      surprise: {
        label: "超越期待",
        sub: "Surprise",
        desc: "以超越期待的提案，\n创造全新价值",
        detail: "\"竟然做到了这种程度\"——这份惊喜正是我们工作的证明。从空间设计到品牌塑造、营销推广，全方位一体化制作，创造出超越客户想象的体验价值。以不受常规束缚的创意，为夜之街带来全新惊喜。",
      },
      loop: {
        label: "履行义务",
        sub: "Commitment",
        desc: "承担责任到最后，\n持续赢得信赖",
        detail: "oblige的语源是「承担义务」。项目完成对我们而言不是终点，而是起点。从开业后的跟进到运营改善建议、SNS运营支持，我们始终以负责任的态度持续陪伴。这份态度，促成了下一次的合作。",
      },
      tagline: "以精准的提案，为夜之街带来惊喜!",
      taglineSub: "oblige意为「承担义务」「施予恩义」「使人欢喜」。\n专注于夜间经济的综合制作。",
    },

    business: {
      sectionEn: "Business",
      sectionJa: "事业内容",
    },

    divisions: {
      construction: {
        nameJa: "建设事业",
        tagline: "以可靠的技术，构筑夜之街",
        description: "专注于夜间经济场景的建筑与施工。从许可申报到工程管理，以可靠的技术支撑夜之街的每一处细节。",
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
        tagline: "最优的物件，最优的形式",
        description: "从适合夜间经济的店铺物件介绍，到民宿·翻新物件的企划与运营。以专业的不动产眼光，夯实您事业的根基。",
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
        tagline: "空间讲述品牌的故事",
        description: "专注于高级俱乐部、酒廊、酒吧等夜间经济场景的室内设计。以银座·北新地为中心，从品牌视角确立空间概念，一贯完成设计、素材选择与照明规划。",
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
        tagline: "让夜间餐饮更加自由",
        description: "以餐车销售的绿色蔬果昔为核心，为夜间经济场景提供全新的餐饮选择。也开展活动出店与品牌联名。",
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
        tagline: "以数字化加速夜间集客",
        description: "专注于夜间经济的SNS运营·网络广告·网站建设。深谙行业的营销专家，从数字领域最大化夜间集客。",
        strengths: [
          { title: "夜间专项SNS运营", desc: "熟悉行业特有目标与时段的运营策略" },
          { title: "网络广告投放", desc: "活用Google·Meta广告进行高效集客" },
          { title: "网站建设", desc: "打造体现品牌形象的网站" },
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
          { q: "最短合同期限是多久？", a: "为便于效果验证，推荐3个月以上的合同期。" },
        ],
      },
      branding: {
        nameJa: "品牌战略",
        tagline: "从战略中诞生独一无二的品牌",
        description: "构建夜间经济事业的品牌识别。从概念制定、CI/VI设计到定位战略，设计品牌的根基。",
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
          title: "一站式解决方案",
          desc: "建设、房地产、室内设计、餐饮、营销、品牌六大事业联动。从策划到运营实现一体化制作。",
        },
        {
          num: "02",
          title: "夜间经济专业化",
          desc: "专注于夜间经济的行业知识与人脉网络。深谙深夜营业特有的法规、集客及空间设计经验。",
        },
        {
          num: "03",
          title: "精准品牌塑造",
          desc: "不仅注重外观，更从品牌战略出发设计空间。通过目标分析与竞争调研，以精准提案打造独一无二的品牌体验。",
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
      heading: "Get in touch",
      desc: "关于事业的咨询与报价均为免费。\n欢迎随时联系我们。",
      email: "info@oblige.jp",
    },

    about: {
      heroTitle: "为夜之街，创造真正的价值。",
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
        tagline: "以精准的提案，\n为夜之街带来惊喜!",
        desc: "准确把握需求的「精准命中」之力，超越期待的「惊喜」提案，\n以及坚持到最后的「履行义务」责任感。\n以这三大信念，支撑夜间事业的成功。",
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
      heading: "Get in touch",
      desc: "关于事业的咨询与报价均为免费。\n欢迎随时联系我们。",
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
        desc: "欢迎随时联系我们。咨询与报价均为免费。",
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
