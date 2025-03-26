import React from 'react'

export default function PrivacyPolicy() {
  const policyItems = [
    {
      title: "Types of data collected",
      content: `A Privacy Policy is a legal document which informs your website's visitors about the data collected on them and how your company will use it.

      This article will cover the components of a good Privacy Policy and will help you better understand how to create one that builds trust and confidence in your customers and protects you against various liability issues. You'll also find examples of how other businesses have used Privacy Policies to comply with the law and inform customers about their privacy practices.

      We've also put together a Sample Privacy Policy Template that you can use to help write your own.`
    },
    {
      title: "How my date used and disclosed",
      content: `A Privacy Policy is a legal document which informs your website's visitors about the data collected on them and how your company will use it.

      This article will cover the components of a good Privacy Policy and will help you better understand how to create one that builds trust and confidence in your customers and protects you against various liability issues. You'll also find examples of how other businesses have used Privacy Policies to comply with the law and inform customers about their privacy practices.

      We've also put together a Sample Privacy Policy Template that you can use to help write your own.`
    },
    {
      title: "How the data is stored and protected",
      content: `A Privacy Policy is a legal document which informs your website's visitors about the data collected on them and how your company will use it.

      This article will cover the components of a good Privacy Policy and will help you better understand how to create one that builds trust and confidence in your customers and protects you against various liability issues. You'll also find examples of how other businesses have used Privacy Policies to comply with the law and inform customers about their privacy practices.

      We've also put together a Sample Privacy Policy Template that you can use to help write your own.`
    },
    {
      title: "User rights regarding their data",
      content: `A Privacy Policy is a legal document which informs your website's visitors about the data collected on them and how your company will use it.

      This article will cover the components of a good Privacy Policy and will help you better understand how to create one that builds trust and confidence in your customers and protects you against various liability issues. You'll also find examples of how other businesses have used Privacy Policies to comply with the law and inform customers about their privacy practices.

      We've also put together a Sample Privacy Policy Template that you can use to help write your own.`
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Privacy & Policy</h2>

      <div className="space-y-8">
        {policyItems.map((item, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
            <div className="text-text-small space-y-4">
              {item.content.split('\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="text-sm leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
